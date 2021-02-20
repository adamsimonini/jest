# Jest Guide #

## [Expect](https://jestjs.io/docs/en/expect) ##

toBe(value) https://jestjs.io/docs/en/expect#tobevalue
    the two things compared must be one and the same, so two objects with equal properties are not the same thing, as they are tow unique (albeit identical) objects\
    this checks if two values are identical

toEqual(value) https://jestjs.io/docs/en/expect#toequalvalue
    "merely" checks each property of an object recursively, to see if all those properties are matched with some other object
    this checks if two values are equivilant

Installing jest globally will make following along easier
    npm install jest --global