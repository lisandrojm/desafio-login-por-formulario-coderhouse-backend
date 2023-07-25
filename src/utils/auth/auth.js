/* ************************************************************************** */
/* /src/utils/auth/auth.js - Configuración de auth.js  (middleware de autenticación)
/* ************************************************************************** */
const authPrivate = (req, res, next) => {
  try {
    // Check if the user is logged in and has admin role
    if (req.session?.user?.role === 'admin') {
      return next();
    } else {
      // Redirect to the login view if the user is not an admin
      res.redirect('/api/sessions/user');
      /* Alternatively, you can return a JSON response for API endpoints */
      // return res.status(401).json({ success: false, error: 'Error de autorización. Debes ser Admin' });
    }
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Error de autorización', message: error.message });
  }
};
const authPublic = (req, res, next) => {
  try {
    if (req.session?.user?.role === 'user') {
      return next();
    } else {
      /* redirigir a la vista de login en caso de que no sea User */
      res.redirect('/');
      /* return res.status(401).json({ success: false, error: 'Error de autorización. Debes ser un User registrado.' }); */
    }
  } catch (error) {
    return res.status(500).json({ success: false, error: 'Error de autorización', message: error.message });
  }
};

module.exports = { authPrivate, authPublic };
