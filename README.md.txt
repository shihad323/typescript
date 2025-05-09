1. interface and type are used to define object shapes, but they have some important difference. interface is better for describing the structure of an object or class and it supports declaration merging. type is flexible for define objects, but also primitives, unions, intersections, and more. type doesn't support declaration merging.

Interface use for object oriented and type use for complex type logic.


2.Any : any can put any type value like string, number, Boolean, object. It can not handle any type of error, it's not safe to write correct code.
Unknown: It can hold any type of value. but firstly it can check what type this is.
Never: Never can not return any type of value. it's throw error or loop.