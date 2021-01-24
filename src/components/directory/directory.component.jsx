import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import { DirectoryContainer } from "./directory.styles";

import MenuItem from "../menu-item/menu-item.component";
import { selectSections } from "../../redux/directory/directory.selectors";

const Directory = ({ sections }) => (
  <DirectoryContainer>
    {sections.map(({ id, ...sectionProps }) => (
      <MenuItem key={id} {...sectionProps} />
    ))}
  </DirectoryContainer>
);

const mapStateToProps = createStructuredSelector({
  sections: selectSections,
});

export default connect(mapStateToProps)(Directory);
