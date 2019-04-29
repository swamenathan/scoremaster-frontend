const apiUrl = 'http://django-new-env.7p94kau3mm.us-west-2.elasticbeanstalk.com';
// const apiUrl = 'http://127.0.0.1:8000';


export const environment = {
  production: true,
  apiUrl: apiUrl,
  loginUrl: apiUrl + '/auth/login/',
  logoutUrl: apiUrl + '/auth/logout/',
  signUpUrl: apiUrl + '/auth/registration/',
  teamsUrl: apiUrl + '/teams/',
  teamUrl: apiUrl + '/team/',
  matchUrl: apiUrl + '/match/',
  matchesUrl: apiUrl + '/matches/',
  changePassUrl: apiUrl + '/auth/password/change/',
  toursUrl: apiUrl + '/tours/',
};
