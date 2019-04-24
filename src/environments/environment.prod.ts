const apiUrl = 'http://django-new-env.7p94kau3mm.us-west-2.elasticbeanstalk.com';


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
};
