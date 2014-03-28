angular-thoughts-app
====================

Similar demo to https://github.com/Fintan/thoughts-sample-app but using Angularjs this time

#Specification:

##Description:

A simple application for compiling thoughts.

##Functionality:

###Main menu
* A corresponding screen will be rendered upon clicking a menu item
* Screens will be rendered via a Router
* A selected menu item will use an 'active' css class

###List Area
* Renders an 'empty' view when there are no thoughts
* Each list item will display the title and description in the available space and truncate when there is not enough room
* A selected item will use an 'active' css class
* A new thought can be added to the list via an 'Add' button

###Detail Area
* Only renders upon clicking 'Add' button
* Only renders when a thought has been selected
* Only renders when a thought has been pre-selected
* Displays a form view allowing the user to input a title, description and tags
* The current thought can be deleted in the detail area

###Tagging Thoughts
* Each thought can be tagged with zero to many comma-delimited tags that are simple text strings
* All available tags need to be displayed on a Tag Screen
* When a tag is clicked on the Tag Screen, the Thoughts Screen should be rendered and display a filtered list of thoughts that have been tagged with the specified tag.
* Each tag button on the Tags Screen should indicate how many thoughts have that tag


## Installation

Retrieve third party dependencies using **npm install** and **bower install**.

## Contributors

[fintangit_www]: https://github.com/Fintan
Fintan Boyle ([https://github.com/Fintan] [fintangit_www])

## License

MIT
