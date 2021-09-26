import React from 'react';
import "./blog.css"
import CourseHeader from "../courses/courseHeader/courseHeader";
import blogBanner from "../../assets/img/006.jpg"
import ReadBtn from "../common/readBtn/readBtn";
import Comment from "../common/comment/comment";
import Like from "../common/like/like";
import BlogLine from "../common/blogLine/blogLine";


const Blog = (props) => {
    return (
        <>
            <section className="documents">
                <div className="container">
                    <div className="document-header course-header">
                        <CourseHeader coursesTitle={props.blogTitle}
                                      coursesBtnTitle={props.blogBtnTitle}/>
                    </div>
                    <div className="document-body mt-4">
                        <div className="row">
                            {Object.keys(props.blogInfo).map(blogObj => <div key={blogObj} className="col-sm-12 col-md-6 col-lg-4">
                                <div className="card mb-5">
                                    <img src={props.blogInfo[blogObj].imgAddress} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <p className="document-number">{props.blogInfo[blogObj].docNumber}</p>
                                        <h5 className="doc-title">{props.blogInfo[blogObj].title} </h5>
                                        <p className="card-text">
                                            <div className="mt-2">
                                                <p className="document-details">{props.blogInfo[blogObj].docDetails}
                                                </p>
                                                <div className="row">
                                                    <BlogLine/>
                                                </div>
                                                <div className="card-end">
                                                    <div className="row">
                                                        <ReadBtn/>
                                                        <div className="col-sm-12 col-md-6">
                                                            <div className="d-flex justify-content-end">
                                                                <Comment/>
                                                                <Like/>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </p>
                                    </div>
                                </div>
                            </div>)}
                        </div>
                    </div>
                </div>

            </section>
        </>
    );
};

export default Blog;