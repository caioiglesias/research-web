import React, { Component } from "react";
import ReadMore from "./ReadMore";
import "../stylesheets/response.css";
import { connect, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import responseHelper from "../helper/responseHelper";
import Header from "./Header";
import ResponseSubmit from "./ResponseSubmit";
import selectedArticleReducer from "../reducers/selectedArticleReducer";

export class ProductDetails extends Component {
  state = {
    isReadMoreMounted: false,
    response: false,
  };
  toggleReadMore = () => {
    this.setState({
      isReadMoreMounted: !this.state.isReadMoreMounted,
    });
  };

  handleSubmitResponse = (values) => {
    const { article: {article_id} } = this.props;
    responseHelper({article_id, ...values});
  };

  render() {
    return (
      <div className="response-container">
        <div>
          <Header />
        </div>

        <div className="response-wrapper">
          <div className="response-information">
            <div className="response-content">
              <h2>{this.props.article.title}</h2>
            </div>
            <div className="response-image">
              <img
                className="response-image"
                src={this.props.article.url}
                alt=""
              />
              <h2>{this.props.article.caption}</h2>
            </div>

            <div className="response-likes">
              <h2>{this.props.article.likes}</h2>
              <h2>{this.props.article.posts}</h2>
              <h2>{this.props.article.shares}</h2>
            </div>

            <div className="response-text">
              <h2>{this.props.article.text}</h2>
            </div>
          </div>
        </div>
        <div className="response-read">
          <button className="button" onClick={this.toggleReadMore}>
            - read more -
          </button>
        </div>
        <div className="response-read">
          {this.state.isReadMoreMounted ? (
            <div className="read">
              <ReadMore read={this.props.article.read} />{" "}
            </div>
          ) : null}
        </div>
        <ResponseSubmit onSubmit={this.handleSubmitResponse} />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    article: state.select.article,
  };
};

export default connect(mapStateToProps)(ProductDetails);

//OPTION FOR NUMBER SELECT

{
  /* 
      <div className="field">
        <div className="control">
          <label className="label">Proficiency</label>
          <div className="select">
            <Field className="input" name="proficiency" component="select">
              <option />
              <option value="beginner">1</option>
              <option value="intermediate">2</option>
              <option value="expert">3</option>
            </Field>
          </div>
        </div>
      </div> */
}
