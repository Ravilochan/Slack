import React, { Component } from "react";
import { Header, Segment, Input, Icon } from "semantic-ui-react";
export default class MessagesHeader extends Component {
  render() {
    const {
      channelName,
      numUniqueUsers,
      handleSearchChange,
      searchLoading,
    } = this.props;
    return (
      <Segment clearing>
        <Header fluid="true" as="h2" floated="left" style={{ marginBottom: 0 }}>
          <span style={{ marginRight: "0.2em" }}> {channelName}</span>
          <span>
            <Icon name={"star outline"} color="black" />
          </span>
          <Header.Subheader>{numUniqueUsers}</Header.Subheader>
        </Header>
        <Header floated="right">
          <Input
            loading={searchLoading}
            onChange={handleSearchChange}
            size="mini"
            icon="search"
            name="searchTerm"
            placeholder="Search Messages"
          />
        </Header>
      </Segment>
    );
  }
}
