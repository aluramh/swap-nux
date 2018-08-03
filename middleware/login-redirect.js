// This middleware redirects the user in case he is already logged in
// and is trying to enter the login page anyways.
const loginRedirect = ({ app, redirect }) => {
  // If the user is logged in, redirect to the main page.
  if (app.$auth.loggedIn) {
    // Since this is executed server-side, use "redirect()"
    // instead of $router.push()
    redirect("/profile");
  }
};

export default loginRedirect;
