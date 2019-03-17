import React, { Component } from "react";
import Grid from './Grid';
import axios from "axios";

class GridLayout extends Component {
    constructor(props) {
        super(props);

        // Sets up our initial state
        this.state = {
            error: false,
            hasMore: true,
            isLoading: false,
            data: [],
            perPageData: 100,
            page: 1
        };
    }

    offset = () => {
        return (this.state.page - 1) * this.state.perPageData;
    };
    loadMore = () => {
        this.setState(
            prevState => ({
                page: prevState.page + 1
            }),
            this.loadUser
        );
    };
    loadUser = () => {
        this.setState({ isLoading: true }, () => {
            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/vnd.simplywallst.v2'
            };
            const data = {
                "offset": this.offset(),
                "size": 100,
                "rules": [
                    ["is_fund", "=", "false"],
                    ["primary_flag", "=", "true"],
                    ["analyst_count", ">", "0"],
                    ["country_name", "=", "AU"],
                    ["value_score", ">", 1],
                    ["order_by", "market_cap", "desc"]
                ]
            };
            axios.post('https://simplywall.st/api/grid/filter?include=info%2Cscore', data, {headers: headers})

                .then((response) => {
                    this.setState({
                        hasMore: (this.state.data.length < response.data.meta.real_total_records),
                        isLoading: false,
                        data: [...this.state.data, ...response.data.data]
                    })
                })
                .catch((error) => {
                    this.setState({
                        error: true,
                        isLoading: false
                    });
                })
        });
    };
    handleScroll = () => {
        if (this.state.error || this.state.isLoading || !this.state.hasMore) return;

        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
            this.loadMore();
        }
    };
    render() {
        return (
            <div>
                {!this.state.error && this.state.data && this.state.data.length>0 &&
                    <Grid data={this.state.data}/>
                }
                {this.state.isLoading &&
                <div className="finish_txt cover-spin"></div>
                }
                {this.state.error &&
                <div className="finish_txt error">
                    Something went wrong. Please try again or contact the administrator.
                </div>
                }
                {!this.state.hasMore &&
                <div className="finish_txt">There are no more results!</div>
                }
            </div>
        );
    }

    componentDidMount() {
        this.loadUser();
        this.scrollListener = window.addEventListener("scroll", e => {
            this.handleScroll(e);
        });
    }
}

export default GridLayout
