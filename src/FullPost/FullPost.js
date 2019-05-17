import React, { Component } from "react";
import { connect } from "react-redux";
import { Card } from "react-bootstrap";

class FullPost extends Component {
  constructor(props) {
    super(props);
    this.state = {
      p: []
    };
  }
  componentWillMount() {
    this.setState({
      p: [...this.state.p, this.props.ps]
    });
  }

  render() {
    return (
      <>
        <h1>{this.state.p[0].title.rendered}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: this.state.p[0].content.rendered }}
        />
        {/* {this.state.p.map(pp => (
          <Card
            bg="secondary"
            text="white"
            key={pp.id}
            style={{ width: "18rem", margin: "auto" }}
          >
            <Card.Header>{pp.id}</Card.Header>
            <Card.Body>
              {" "}
              <Card.Title>{pp.content.rendered}</Card.Title>
              <Card.Text>
                {" "}
                dangerouslySetInnerHTML=
                {{
                  __html: pp.content.rendered
                }}
              </Card.Text>
            </Card.Body>
          </Card>
        ))} */}
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    ps: state.posts
  };
};

export default connect(mapStateToProps)(FullPost);
