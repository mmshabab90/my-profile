import React, { Component } from 'react'
import { Grid, Cell} from 'react-mdl';

export default class VolunteerWork extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <p>{this.props.startYear} - {this.props.endYear}</p>
                    </Cell>
                    <Cell col={8}>
                        <a href={this.props.siteAddress}>
                            <h4 style={{ marginTop: '0px'}}>
                                {this.props.Organization}
                            </h4>
                        </a>
                        <p>{this.props.activity}</p>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
