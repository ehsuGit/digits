![image](https://cdn.discordapp.com/attachments/431142028210995210/1225329451269881886/image.png?ex=6620bbfa&is=660e46fa&hm=6617c2961c85bcf81dfac1ca23458313dce9bc00c5bd31b1d5dffe3f21518580&)

digits is a sample Meteor 2.9 application that illustrates: 

  * A standard directory layout using 'imports/' as recommended in the [Meteor Guide](https://guide.meteor.com/structure.html)
  * [Bootstrap 5 React](https://react-bootstrap.github.io/) for user interface.
  * [Uniforms](https://uniforms.tools/) for form development.
  * [alanning:roles](https://github.com/alanning/meteor-roles) to implement a special "Admin" user.
  * Authorization, authentication, and registration using built-in Meteor packages.
  * Initialization of users and data from a settings file.
  * Alerts regarding success or failure of DB updates using [Sweet Alert](https://sweetalert.js.org/).
  * Quality assurance using [ESLint](http://eslint.org) with packages to partially enforce the [Meteor Coding Standards](https://guide.meteor.com/code-style.html) and the [AirBnB Javascript Style Guide](https://github.com/airbnb/javascript).

The goal of this template is to help you get quickly started doing Meteor development by providing a reasonable directory structure for development and deployment, a set of common extensions to the core framework, and boilerplate code to implement basic page display, navigation, forms, roles, and collection manipulation.

To keep this codebase simple and small, some important capabilities are intentionally excluded from this template:

  * Unit Testing.
  * Security (meteor-application-template-react enables the insecure packages)
  * Deployment

Examples of the these capabilities will be provided elsewhere.

## Installation

First, [install Meteor](https://www.meteor.com/install).

Second, go to [this page](https://github.com/ehsuGit/digits), and click the "Use this template" button. Complete the dialog box to create a new repository that you own that is initialized with this template's files.

Third, go to your newly created repository, and click the "Clone or download" button to download your new GitHub repo to your local file system.  Using [GitHub Desktop](https://desktop.github.com/) is a great choice if you use MacOS or Windows.

Fourth, cd into the app/ directory of your local copy of the repo, and install third party libraries with:

```
$ meteor npm install
```

## Running the system

Once the libraries are installed, you can run the application by invoking the "start" script in the [package.json file](https://github.com/ehsuGit/digits/blob/master/app/package.json):

```
$ meteor npm run start
```

The first time you run the app, it will create some default users and data. Here is the output:

```
 meteor npm run start 

> meteor-application-template-react@ start /Users/carletonmoore/GitHub/ICS314/meteor-application-template-react/app
> meteor --no-release-check --exclude-archs web.browser.legacy,web.cordova --settings ../config/settings.development.json

[[[[[ ~/GitHub/ICS314/meteor-application-template-react/app ]]]]]

=> Started proxy.                             
=> Started HMR server.                        
=> Started MongoDB.                           
I20240403-20:15:50.312(-10)? Creating the default user(s)
I20240403-20:15:50.343(-10)?   Creating user admin@foo.com.
I20240403-20:15:50.543(-10)?   Creating user john@foo.com.
I20240403-20:15:50.602(-10)? Creating default contacts.
I20240403-20:15:50.602(-10)?   Adding: Johnson (john@foo.com)
I20240403-20:15:50.633(-10)?   Adding: Casanova (john@foo.com)
I20240403-20:15:50.637(-10)?   Adding: Binsted (admin@foo.com)
I20220529-12:09:18.773(-10)? Monti APM: completed instrumenting the app
=> Started your app.

=> App running at: http://localhost:3000/
```

Periodically, you might see `Error starting Mongo (2 tries left): Cannot run replSetReconfig because the node is currently updating its configuration` after the `=> Started HMR server.`. It doesn't seem to be a problem since the MongoDB does start.

### Viewing the running app

If all goes well, the template application will appear at [http://localhost:3000](http://localhost:3000).  You can login using the credentials in [settings.development.json](https://github.com/ehsuGit/digits/blob/main/config/settings.development.json), or else register a new account.

### ESLint

You can verify that the code obeys our coding standards by running ESLint over the code in the imports/ directory with:

```
meteor npm run lint
```

## Walkthrough

The following sections describe the major features of this template.

### Directory structure

The top-level directory structure is:

```
.github     # holds the GitHub Continuous Integration action and Issue template.
app/        # holds the Meteor application sources
config/     # holds configuration files, such as settings.development.json
doc/        # holds developer documentation, user guides, etc.
.gitignore  # don't commit IntelliJ project files, node_modules, and settings.production.json
```

This structure separates documentation files (such as screenshots) and configuration files (such as the settings files) from the actual Meteor application.

The app/ directory has this structure:

```
.deploy/
  .gitignore     # don't commit mup.js or settings.json
  mup.sample.js  # sample mup.js file used for deploying the application
  settings.sample.json # sample settings file
  
client/
  main.html      # The boilerplate HTML with a "root" div to be manipulated by React.
  main.js        # import startup files.

imports/
  api/           # Define collections
    contacts/       # The contacts collection definition
  startup/       # Define code to run when system starts up (client-only, server-only, both)
    client/
    server/
  ui/
    components/  # Contains page elements, some of which could appear on multiple pages.
    layouts/     # Contains top-level layout (<App> component).
    pages/       # Contains components for each page.

node_modules/    # managed by npm

public/          # static assets (like images) can go here.

server/
   main.js       # import the server-side js files.
   
tests/           # testcafe acceptance tests.
```

### Import conventions

This system adheres to the Meteor guideline of putting all application code in the imports/ directory, and using client/main.js and server/main.js to import the code appropriate for the client and server in an appropriate order.

### Application functionality

The application implements a simple CRUD application for managing Contacts, which is stored in a Mongo Collection consisting of a first name (String), last name (String), adress (String), image (String), description (String), and an owner.

By default, each user only sees the Contacts that they have created.  However, the settings file enables you to define default accounts.  If you define a user with the role "admin", then that user gets access to a special page which lists all the Contacts defined by all users.

#### Landing page

When you retrieve the app at http://localhost:3000, this is what should be displayed:

![](https://cdn.discordapp.com/attachments/431142028210995210/1225329451269881886/image.png?ex=6620bbfa&is=660e46fa&hm=6617c2961c85bcf81dfac1ca23458313dce9bc00c5bd31b1d5dffe3f21518580&)

The next step is to use the Login menu to either Login to an existing account or register a new account.

#### Login page

Clicking on the Login link, then on the Sign In menu item displays this page:

![](https://cdn.discordapp.com/attachments/431142028210995210/1225332054062010388/image.png?ex=6620be67&is=660e4967&hm=1bca1a3a3ec0bfd37d99bff40fce05f9ed1bb842632252f476b08fb053a187e3&)

#### Register page

Alternatively, clicking on the Login link, then on the Sign Up menu item displays this page:

![](https://cdn.discordapp.com/attachments/431142028210995210/1225332397105479740/image.png?ex=6620beb9&is=660e49b9&hm=ce15723e77b0416186fe7ecdc5e9b0e0bebe2622a4722f3158d33c44f10be867&)


#### Landing (after Login) page, non-Admin user

Once you log in (either to an existing account or by creating a new one), the navbar changes as follows:

![](https://cdn.discordapp.com/attachments/431142028210995210/1225332590639190087/image.png?ex=6620bee7&is=660e49e7&hm=d61e9917f98b1f7e18e2f91449bf1307b130f3bb285921745f2dbde8807a18be&)

You can now add new Contacts, and list the Contacts you have created. Note you cannot see any Contacts created by other users.

#### Add Contacts page

After logging in, here is the page that allows you to add new Contacts:

![](https://cdn.discordapp.com/attachments/431142028210995210/1225333424278081598/image.png?ex=6620bfad&is=660e4aad&hm=778bb78df840cb1a7179fe86860e666374e5f8d3c296344f07236f75aa653b00&)

#### List Contact page

After logging in, here is the page that allows you to list all the Contacts you have created:

![](https://cdn.discordapp.com/attachments/431142028210995210/1225333484302762035/image.png?ex=6620bfbc&is=660e4abc&hm=c0d176fabaedadde1b2bf2b321cb8e9b3c67976e20609c311b87adf8a558f517&)

You click the "Edit" link to go to the Edit Contacts page, shown next.

#### Edit Contacts page

After clicking on the "Edit" link associated with an item, this page displays that allows you to change and save it:

![]()

#### Landing (after Login), Admin user

You can define an "admin" user in the settings.json file. This user, after logging in, gets a special entry in the navbar:

![](https://cdn.discordapp.com/attachments/431142028210995210/1225334306126168085/image.png?ex=6620c080&is=660e4b80&hm=5e1ea5e81e5d44f777b1349e838bcc593c2dbc2eae0e3fbb72c4c7196977ca5e&)

#### Admin page (list all users Contacts )

To provide a simple example of a "super power" for Admin users, the Admin page lists all of the Contacts by all of the users:

![](https://cdn.discordapp.com/attachments/431142028210995210/1225334429233188985/image.png?ex=6620c09d&is=660e4b9d&hm=fdc33d98148298dd7b6b09a8f26adc90a5809d2f4c5d9d18c9285a008b98f637&)

Note that non-admin users cannot get to this page, even if they type in the URL by hand.

### Collections

The application implements a single Collection called "Contacts". Each Contacts document has the following fields: name, quantity, condition, and username.

The Contacts collection is defined in [imports/api/contact/contact.js](https://github.com/ehsuGit/digits/blob/main/app/imports/api/contact/Contacts.js).

The Contacts collection is initialized in [imports/startup/server/Mongo.js](https://github.com/ehsuGit/digits/blob/main/app/imports/startup/server/Mongo.js).

### CSS

The application uses the [React implementation of Bootstrap 5](https://react-bootstrap.github.io/). You can adjust the theme by editing the `app/client/style.css` file. To change the theme override the Bootstrap 5 CSS variables.

```css
/* Change bootstrap variable values.
 See https://getbootstrap.com/docs/5.2/customize/css-variables/
 */
body {
  --bs-light-rgb: 236, 236, 236;
}

/* Define custom styles */
.gray-background {
  background-color: var(--bs-gray-200);
  color: var(--bs-dark);
  padding-top: 10px;
  padding-bottom: 20px;
}
```

### Routing

For display and navigation among its four pages, the application uses [React Router](https://reacttraining.com/react-router/).

Routing is defined in [imports/ui/layouts/App.jsx](https://github.com/ehsuGit/digits/blob/main/app/imports/ui/layouts/App.jsx).


### Authentication

For authentication, the application uses the Meteor accounts package.

When the application is run for the first time, a settings file (such as [config/settings.development.json](https://github.com/ehsuGit/digits/blob/main/config/settings.development.json)) should be passed to Meteor. That will lead to a default account being created through the code in [imports/startup/server/accounts.js](https://github.com/ehsuGit/digits/blob/main/app/imports/startup/server/accounts.js).

The application allows users to register and create new accounts at any time.

### Authorization

Only logged in users can manipulate Contacts documents (but any registered user can manipulate any Contacts document, even if they weren't the user that created it.)

### Configuration

The [config](https://github.com/ehsuGit/digits/blob/main/config) directory is intended to hold settings files.  The repository contains one file: [config/settings.development.json](https://github.com/ehsuGit/digits/blob/main/config/settings.development.json).

The [.gitignore](https://github.com/ehsuGit/digits/blob/main/.gitignore) file prevents a file named settings.production.json from being committed to the repository. So, if you are deploying the application, you can put settings in a file named settings.production.json and it will not be committed.

### Quality Assurance

#### ESLint

The application includes a [.eslintrc](https://github.com/ehsuGit/digits/blob/main/app/.eslintrc) file to define the coding style adhered to in this application. You can invoke ESLint from the command line as follows:

```
[~/meteor-application-template-react/app]-> meteor npm run lint

> meteor-application-template-react@ lint /Users/philipjohnson/meteor-application-template-react/app
> eslint --quiet ./imports
```

ESLint should run without generating any errors.

It's significantly easier to do development with ESLint integrated directly into your IDE (such as IntelliJ).

## Screencasts

For more information about this system, please watch one or more of the following screencasts. Note that the current source code might differ slightly from the code in these screencasts, but the changes should be very minor.

  * [Walkthrough of system user interface (6 min)](https://youtu.be/48xu1hrqUi8)
  * [Data and accounts structure and initialization (18 min)](https://youtu.be/HZRjwrVBWp4)
  * [Navigation, routing, pages, components (34 min)](https://youtu.be/XztTdHpv6Jw)
  * [Forms (32 min)](https://youtu.be/8FyWR3gUGCM)
  * [Authorization, authentication, and roles (12 min)](https://youtu.be/9HX5vuXTlvA)
