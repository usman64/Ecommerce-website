Things done in Section 6: Lesson 4 (2/2)

- Sign-in-and-sign-out page
- sign-in, Form-input, custom-button components
  - <CustomButton> {children} </CustomButton>
  - See form-input component
- styling:
  - .sign-in {width: 30vw;}
  - @mixin shrinkLabel {top: -14px; font-size: 12px; color: \$main-color;}
  - input[type='password'] {letter-spacing: 0.3em;}
  - \$sub-color: grey;
  - &:focus ~ .form-input-label { @include shrinkLabel();}
