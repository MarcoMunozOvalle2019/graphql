import React, { Component } from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo';

let GET_USER_INFO = gql`
    {
        tasks {
            _id
            description
            }
    }
`;

class GettingGraphQLData extends Component {
    combo(){
        var data = this.props.data;
        if(data.loading){
            return( <option disabled>Loading authors</option> );
        } else {
            return data.tasks.map(author => {
                return( <option key={ author._id } value={author.description}>{author.description}</option> );
            });
        }
    }
    render(){
        return(
        <div>
            <label>Option3.</label>
            <select>
                <option>description</option>
                { this.combo() }
            </select>
        </div>
        );
    }
}
export default graphql(GET_USER_INFO)(GettingGraphQLData)

