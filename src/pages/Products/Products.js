import React, { Component } from "react";
import Loader from "react-loader-spinner";
import { AllProductsContext } from "../../context/AllProducts";
import MiniatureViewProduct from "../../components/MiniatureViewProduct/MiniatureViewProduct";
import * as MFApi from "../../lib/API";
import CategoryHeader from "../../components/CategoryHeader/CategoryHeader";
import * as header_seating_header from "../../resources/category-seating.png";
import * as header_tables_header from "../../resources/category-tables.png";
import * as header_desks_header from "../../resources/category-desks.png";
import * as header_storage_header from "../../resources/category-storage.png";
import * as header_bedroom_header from "../../resources/category-bedroom.png";
import * as header_misc_header from "../../resources/category-miscellaneous.png";

class Products extends Component {
  state = {
    isLoading: false,
    error: null,
    isCartDrawerOpen: false,
    filteredProducts: []
  };

  componentDidMount() {
    let category;
    if (this.props.context.currentSelectedCategory === "") {
      category = this.props.match.params.category;
    } else {
      category = this.props.context.currentSelectedCategory;
    }
    MFApi.getProductsWithFilter(category)
      .then(function(res) {
        return res.json();
      })
      .then(
        function(data) {
          if (data) {
            this.setState({
              filteredProducts: data,
              isLoading: false,
              error: null
            });
          } else {
            this.setState({
              filteredProducts: [],
              isLoading: false,
              error: "Lo sentimos, ocurrió un error"
            });
          }
        }.bind(this)
      )
      .catch(error => {
        console.log(error);
      });
  }

  componentWillUnmount() {
    return true;
  }

  componentWillReceiveProps(nextProps) {
    //if (JSON.stringify(this.props) !== JSON.stringify(nextProps)) return;
    if (nextProps.context.currentSelectedCategory === "") return;
    MFApi.getProductsWithFilter(nextProps.context.currentSelectedCategory)
      .then(function(res) {
        return res.json();
      })
      .then(
        function(data) {
          if (data) {
            this.setState({
              filteredProducts: data,
              isLoading: false,
              error: null
            });
          } else {
            this.setState({
              filteredProducts: [],
              isLoading: false,
              error: "Lo sentimos, ocurrió un error"
            });
          }
        }.bind(this)
      )
      .catch(error => {
        console.log(error);
      });
  }

  getImgSrc = category => {
    switch (category.toLowerCase()) {
      case "seating":
        return header_seating_header;
      case "tables":
        return header_tables_header;
      case "desks":
        return header_desks_header;
      case "storage":
        return header_storage_header;
      case "bedroom":
        return header_bedroom_header;
      case "miscellaneous":
        return header_misc_header;
    }
  };

  handleFilterButton = filter => {
    this.setState({
      isLoading: true,
      error: null
    });
    //if (filter === this.state.buttonActive) return;
    let category;
    if (this.props.context.currentSelectedCategory === "") {
      category = this.props.match.params.category;
    } else {
      category = this.props.context.currentSelectedCategory;
    }
    if (filter === "onSale") {
      MFApi.getProductsWithFilter(category, "onSale")
        .then(function(res) {
          return res.json();
        })
        .then(
          function(data) {
            if (data) {
              this.setState({
                filteredProducts: data,
                isLoading: false,
                error: null,
                buttonActive: filter
              });
            } else {
              this.setState({
                filteredProducts: [],
                isLoading: false,
                error: "Lo sentimos, ocurrió un error"
              });
            }
          }.bind(this)
        )
        .catch(error => {
          console.log(error);
        });
    } else {
      MFApi.getProductsWithFilter(category)
        .then(function(res) {
          return res.json();
        })
        .then(
          function(data) {
            if (data) {
              this.setState({
                filteredProducts: data,
                isLoading: false,
                error: null,
                buttonActive: filter
              });
            } else {
              this.setState({
                filteredProducts: [],
                isLoading: false,
                error: "Lo sentimos, ocurrió un error"
              });
            }
          }.bind(this)
        )
        .catch(error => {
          console.log(error);
        });
    }
  };

  render() {
    return (
      <AllProductsContext.Consumer>
        {context => (
          <>
            <CategoryHeader
              category={
                this.props.context.currentSelectedCategory === ""
                  ? this.props.match.params.category
                  : this.props.context.currentSelectedCategory
              }
              imgSrc={this.getImgSrc(
                this.props.context.currentSelectedCategory === ""
                  ? this.props.match.params.category
                  : this.props.context.currentSelectedCategory
              )}
              onHandleFilterButton={this.handleFilterButton}
              itemListsize={this.state.filteredProducts.length}
            />
            {this.state.error != null && (
              <div class="alert alert-danger" role="alert">
                {this.state.error}
              </div>
            )}
            {this.state.isLoading && (
              <Loader type="Triangle" color="red" height={100} width={100} />
            )}

            <div className="row">
              {this.state.filteredProducts.map(product => (
                <div className="col-3">
                  <MiniatureViewProduct key={product.id} product={product} />
                </div>
              ))}
            </div>
          </>
        )}
      </AllProductsContext.Consumer>
    );
  }
}

export default props => (
  <AllProductsContext.Consumer>
    {context => <Products {...props} context={context} />}
  </AllProductsContext.Consumer>
);
