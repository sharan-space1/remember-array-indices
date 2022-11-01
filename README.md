# remember-array-indices
Maintain positions in an array taking into account items being removed and added

### For Example:
If I start with an array [1, 2, 3, 4, 5]
            with indices [0, 1, 2, 3, 4]
            
An operation that removes 2 from the array would cause:

Array  : [1, 3, 4, 5]
Indices: [0, 1, 2, 3]

And an operation that adds 2 back would make the array:

Array  : [1, 2, 3, 4, 5]
Indices: [0, 1, 2, 3, 4]
            
