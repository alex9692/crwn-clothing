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

import { ReactComponent as Logo } from "../../assets/crown.svg";
import { selectCurrentUser } from "../../redux/user/user.selectors";
import { selectHidden } from "../../redux/cart/cart.selectors";
import { SIGN_OUT_START } from "../../redux/user/user.actions";

const Header = ({ user, hidden, signOut }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLinkContainer to="/shop">SHOP</OptionLinkContainer>
      <OptionLinkContainer to="/contact">CONTACT</OptionLinkContainer>
      {user ? (
        <OptionLinkContainer as="div" onClick={() => signOut()}>
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

const mapDispatchToProps = (dispatch) => ({
  signOut: () => dispatch(SIGN_OUT_START()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
