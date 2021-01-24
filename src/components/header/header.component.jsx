import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLinkContainer,
} from "./header.styles";

import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import { auth } from "../../firebase/firebase.utils";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectHidden } from "../../redux/cart/cart.selectors";

const Header = ({ user, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLinkContainer to="/shop">SHOP</OptionLinkContainer>
      <OptionLinkContainer to="/contact">CONTACT</OptionLinkContainer>
      {user ? (
        <OptionLinkContainer as="div" onClick={() => auth.signOut()}>
          LOGOUT
        </OptionLinkContainer>
      ) : (
        <OptionLinkContainer to="/signin">SIGNIN</OptionLinkContainer>
      )}
      <CartIcon />
    </OptionsContainer>
    {!hidden ? <CartDropdown /> : null}
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  user: selectCurrentUser,
  hidden: selectHidden,
});

export default connect(mapStateToProps)(Header);
