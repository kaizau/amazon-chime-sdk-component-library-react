const awsPath = '/Prod';
export const rootPath: string = window.location.href.includes(awsPath)
  ? `${awsPath}/`
  : '/';

const routes = {
  HOME: `${rootPath}`,
  SIMPLE_APP: `${rootPath}simple-app`,
};

export default routes;
