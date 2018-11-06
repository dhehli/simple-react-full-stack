const BasicLayout = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
   
      <Component {...props}/>
   
  )}/>
)

export default BasicLayout;
