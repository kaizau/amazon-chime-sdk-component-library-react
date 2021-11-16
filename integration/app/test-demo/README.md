# README - React Testing Demo

This is the demo we use to test the React component library. There are different mini apps that will be used in doing different tests. All these mini apps should be stored in this demo with different routes. When running tests, only need to build/deploy this demo.

## To run the demo app locally

1. If you haven't already, [configure your AWS credentials](https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-quickstart.html).
2. Install the dependencies: `npm install`
3. Start the webpack server and node server concurrently: `npm start`
4. Open <https://0.0.0.0:9000/> in your browser

## Add a new mini app

1. Implement a new app under `pages` folder

2. Create a new route for this app in `constants/routes.ts`

    ```js
    const routes = {
      HOME: `${rootPath}`,
      // Add new routes below
      SIMPLE_APP: `${rootPath}simple-app`,
    };
    ```

3. Add the link to your new route in `pages/Menu/tsx`

    ```html
    <nav>
      <ul>
        <!-- Add new links below-->
        <li><Link id="simple-app" to={routes.SIMPLE_APP}>Simple App</Link></li>
      </ul>
    </nav>
    ```
