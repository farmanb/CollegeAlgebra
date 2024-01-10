var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter-2",
  "level": "1",
  "url": "frontmatter-2.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": "  My Website   copyright  "
},
{
  "id": "sec-sets",
  "level": "1",
  "url": "sec-sets.html",
  "type": "Section",
  "number": "1.1",
  "title": "Sets",
  "body": " Sets   In the sciences, knowledge is often derived from experimentation in a process known as inductive reasoning . While these methods may provide insight into a problem, inductive reasoning is not a valid method of producing mathematical truth. Instead, mathematics produces new knowledge from known truths using logical inference in a process known as deductive reasoning . In fact, all mathematical knowledge is derived from only nine statements that are assumed to be true called axioms . These axioms and the truths derived from them are known as Zermelo-Fraenkel Set Theory .  For this reason, sets and set operations are unavoidable in any careful treatment of mathematics. While our treatment of algebra is careful, this is not meant to be a course on the foundations of mathematics. We present here the rudiments of a set theory that includes only the pieces absolutely necessary for the development of the material relevant to basic algebra. We begin with the intuitive definition of a set.    Representations of Sets       Membership operator    A set   Set  is a collection of objects called elements   Set  Element  or members   Set  Member  of the set. We specify that an object is an element of the set by writing and say is an element (or member) of     Sets are effectively mathematical containers for things . While there is no restriction on what kinds of things we can place in a set, we will focus on sets that contain numbers. For small collections of things , we can write down the elements explicitly.   Roster Notation    Roster notation   Set  Roster Notation  specifies the elements of a set as a comma separated list surrounded by curly braces.    Most interesting sets either have more elements than we want to write down or more elements than we can write down. For large sets, we use a sort of description of the elements.   Set-Builder Notation    Set-builder notation   Set  Set-Builder Notation  specifies the members of a set using a variable and condition for membership in the set.    The condition for membership must always be a statement that is either true or false. It allows us to test whether a thing belongs in the set.   Roster Notation   Express the set with elements , , , and in .          Set-Builder Notation   Express the set that contains all positive, even integers in .    By definition, the even positive integers are all the multiples of : The ellipsis ( ) here means the list continues according to the pattern. Therefore we can express the set of even positive integers as   Note that we can use the conditions in the set-builder notation of to test whether any thing is an element of . For example, we can conclude a Zebra is not an element of this set because a Zebra is not a number (let alone twice an integer).  More practically, we can test whether by first writing Since is not an integer, we conclude .  Similarly, we can test whether by writing Since is a positive integer, we conclude .      Subsets and Equality  In order to do work with sets effectively, we need a way to compare sets analogous to how we compare numbers. The simplest comparison we can make is sameness . For numbers, this is important because the same number can have two different representations, such as The idea for sets is the same a set might have more than one representation.    Let and be sets. We say the sets and are equal   Set  Equal  and write      Equality of sets  if and have the exact same elements.     The sets and are equal.    The sets and are not equal.   Sets have a particularly odd quirk: they do not keep track of repetition.   The sets and are equal.   The other comparison we can make is an order relationship. For any two numbers, we indicate which one is the smaller of the two using the symbol , such as For sets, we have a similar sort of ordering.   Subset   Let and be sets. We say that is a subset   Set  Subset  of and write      Subset operator  if every element of is also an element of .     Every set is a subset of itself, .    The set is a subset of the set . The set is not a subset of the set .   A very nice property of numbers is that any two numbers, and , must satisfy Unfortunately, this is not the case for sets. It may be the case that two sets and satisfy and . We call such sets incomparable   Set  Incomparable     The set is not a subset of and the set is not a subset of the set .   Finally, we note that in some instances we may wish to exclude the possibility that two objects are the same in an order relationship. With numbers, we use the symbol to indicate that one number is strictly smaller than the other, such as There is a strongly analogous notational change if we want to emphasize that one set is a subset of another, but the two sets are not the same.   Proper Subset   Let and be sets. We say that is a proper subset   Set  Subset  Proper  of and write      Proper subset operator  if every element of is also an element of and .     The set is a proper subset of the set . We could write either or . We use the latter when it is important to emphasize that the two sets are not the same.     Special Sets  Certain sets appear so frequently that mathematicians use an agreed upon symbol to refer to the set. We collect a list of these sets below.   The Empty Set   The empty set   Set  Empty  is the set with no elements, .     The empty set       For convenience, the is a subset of every set.    The Natural Numbers   The set of natural numbers   Set  Natural Numbers  is the set with elements all positive integers,      The set of natural numbers       The Integers   The set of integers   Set  Integers  is the set with elements all integers,      The set of integers       The Rational Numbers   The set of rational numbers   Set  Rational Numbers  is the set with elements all rational numbers,      The set of rational numbers       The Real Numbers   The set of real numbers   Set  Real Numbers  is the set with elements all real numbers, .     The set of real numbers.      These sets of real numbers are related in the following way Each of the containments is proper because, for example,   Every natural number is an integer, but and .    Every integer is a rational number, but and .    Every rational number is a real number, but and .       Intervals  A particularly special class of subsets of are the intervals . These sets arise frequently, so it is important to specify the notation and a graphical representation for each one.   Open Interval   Let and be real numbers and assume that . An open interval   Set  Interval  Open  is a set that takes one of the following forms.      The open intervals                              Closed Interval   Let and be real numbers and assume that . A closed interval   Set  Interval  Closed  is a set that takes one of the following forms      The closed intervals                              Half-Open Interval   Let and be real numbers and assume that . A half-open interval   Set  Interval  Half-Open  from to takes one of the following forms.      The half-open intervals                       Basic Set Operations  There are two common operations that we will frequently need to perform on sets.   Intersection   Let and be sets. The intersection   Set  Intersection  of and is the set      The intersection is the largest set that is a subset of and a subset of .    Union   Let and be sets. The union   Set  Union  of and is the set      In mathematics, the word or is inclusive . This means the condition or allows for the possibility that  and  .    The union is the smallest set that contains both and as subsets.    Intersection of Intervals   Find the intersection of the intervals and . Sketch the intersection on a number line.    The intersection of the intervals and is the set    The intervals , , and their intersection                                Union of Intervals   Find the union of the two intervals and . Sketch the union on a number line.    The union of the two intervals and is the set    The intervals , , and their union                                "
},
{
  "id": "sets-intro-1",
  "level": "2",
  "url": "sec-sets.html#sets-intro-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "axioms "
},
{
  "id": "def-set",
  "level": "2",
  "url": "sec-sets.html#def-set",
  "type": "Definition",
  "number": "1.1.1",
  "title": "",
  "body": "     Membership operator    A set   Set  is a collection of objects called elements   Set  Element  or members   Set  Member  of the set. We specify that an object is an element of the set by writing and say is an element (or member) of    "
},
{
  "id": "def-roster_notation",
  "level": "2",
  "url": "sec-sets.html#def-roster_notation",
  "type": "Definition",
  "number": "1.1.2",
  "title": "Roster Notation.",
  "body": " Roster Notation    Roster notation   Set  Roster Notation  specifies the elements of a set as a comma separated list surrounded by curly braces.   "
},
{
  "id": "def-set_builder_notation",
  "level": "2",
  "url": "sec-sets.html#def-set_builder_notation",
  "type": "Definition",
  "number": "1.1.3",
  "title": "Set-Builder Notation.",
  "body": " Set-Builder Notation    Set-builder notation   Set  Set-Builder Notation  specifies the members of a set using a variable and condition for membership in the set.   "
},
{
  "id": "eg-roster_notation",
  "level": "2",
  "url": "sec-sets.html#eg-roster_notation",
  "type": "Example",
  "number": "1.1.4",
  "title": "Roster Notation.",
  "body": " Roster Notation   Express the set with elements , , , and in .        "
},
{
  "id": "eg-set_builder_notation",
  "level": "2",
  "url": "sec-sets.html#eg-set_builder_notation",
  "type": "Example",
  "number": "1.1.5",
  "title": "Set-Builder Notation.",
  "body": " Set-Builder Notation   Express the set that contains all positive, even integers in .    By definition, the even positive integers are all the multiples of : The ellipsis ( ) here means the list continues according to the pattern. Therefore we can express the set of even positive integers as   Note that we can use the conditions in the set-builder notation of to test whether any thing is an element of . For example, we can conclude a Zebra is not an element of this set because a Zebra is not a number (let alone twice an integer).  More practically, we can test whether by first writing Since is not an integer, we conclude .  Similarly, we can test whether by writing Since is a positive integer, we conclude .   "
},
{
  "id": "def-set_equality",
  "level": "2",
  "url": "sec-sets.html#def-set_equality",
  "type": "Definition",
  "number": "1.1.6",
  "title": "",
  "body": "  Let and be sets. We say the sets and are equal   Set  Equal  and write      Equality of sets  if and have the exact same elements.   "
},
{
  "id": "eg-equality_of_sets",
  "level": "2",
  "url": "sec-sets.html#eg-equality_of_sets",
  "type": "Example",
  "number": "1.1.7",
  "title": "",
  "body": " The sets and are equal.  "
},
{
  "id": "eg-unequal_sets",
  "level": "2",
  "url": "sec-sets.html#eg-unequal_sets",
  "type": "Example",
  "number": "1.1.8",
  "title": "",
  "body": " The sets and are not equal.  "
},
{
  "id": "eg-sets_do_not_count_repitition",
  "level": "2",
  "url": "sec-sets.html#eg-sets_do_not_count_repitition",
  "type": "Example",
  "number": "1.1.9",
  "title": "",
  "body": " The sets and are equal.  "
},
{
  "id": "def-subset",
  "level": "2",
  "url": "sec-sets.html#def-subset",
  "type": "Definition",
  "number": "1.1.10",
  "title": "Subset.",
  "body": " Subset   Let and be sets. We say that is a subset   Set  Subset  of and write      Subset operator  if every element of is also an element of .   "
},
{
  "id": "rmk-set_subset_self",
  "level": "2",
  "url": "sec-sets.html#rmk-set_subset_self",
  "type": "Remark",
  "number": "1.1.11",
  "title": "",
  "body": " Every set is a subset of itself, .  "
},
{
  "id": "eg-subset",
  "level": "2",
  "url": "sec-sets.html#eg-subset",
  "type": "Example",
  "number": "1.1.12",
  "title": "",
  "body": " The set is a subset of the set . The set is not a subset of the set .  "
},
{
  "id": "subsec-subsets_and_equality-12",
  "level": "2",
  "url": "sec-sets.html#subsec-subsets_and_equality-12",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "incomparable "
},
{
  "id": "eg-incomparable_sets",
  "level": "2",
  "url": "sec-sets.html#eg-incomparable_sets",
  "type": "Example",
  "number": "1.1.13",
  "title": "",
  "body": " The set is not a subset of and the set is not a subset of the set .  "
},
{
  "id": "def-proper_subset",
  "level": "2",
  "url": "sec-sets.html#def-proper_subset",
  "type": "Definition",
  "number": "1.1.14",
  "title": "Proper Subset.",
  "body": " Proper Subset   Let and be sets. We say that is a proper subset   Set  Subset  Proper  of and write      Proper subset operator  if every element of is also an element of and .   "
},
{
  "id": "eg-proper_subset",
  "level": "2",
  "url": "sec-sets.html#eg-proper_subset",
  "type": "Example",
  "number": "1.1.15",
  "title": "",
  "body": " The set is a proper subset of the set . We could write either or . We use the latter when it is important to emphasize that the two sets are not the same.  "
},
{
  "id": "def-empty_set",
  "level": "2",
  "url": "sec-sets.html#def-empty_set",
  "type": "Definition",
  "number": "1.1.16",
  "title": "The Empty Set.",
  "body": " The Empty Set   The empty set   Set  Empty  is the set with no elements, .     The empty set     "
},
{
  "id": "rmk-empty_set_subset_all_sets",
  "level": "2",
  "url": "sec-sets.html#rmk-empty_set_subset_all_sets",
  "type": "Remark",
  "number": "1.1.17",
  "title": "",
  "body": " For convenience, the is a subset of every set.  "
},
{
  "id": "def-naturals",
  "level": "2",
  "url": "sec-sets.html#def-naturals",
  "type": "Definition",
  "number": "1.1.18",
  "title": "The Natural Numbers.",
  "body": " The Natural Numbers   The set of natural numbers   Set  Natural Numbers  is the set with elements all positive integers,      The set of natural numbers     "
},
{
  "id": "def-integers",
  "level": "2",
  "url": "sec-sets.html#def-integers",
  "type": "Definition",
  "number": "1.1.19",
  "title": "The Integers.",
  "body": " The Integers   The set of integers   Set  Integers  is the set with elements all integers,      The set of integers     "
},
{
  "id": "def-rationals",
  "level": "2",
  "url": "sec-sets.html#def-rationals",
  "type": "Definition",
  "number": "1.1.20",
  "title": "The Rational Numbers.",
  "body": " The Rational Numbers   The set of rational numbers   Set  Rational Numbers  is the set with elements all rational numbers,      The set of rational numbers     "
},
{
  "id": "def-reals",
  "level": "2",
  "url": "sec-sets.html#def-reals",
  "type": "Definition",
  "number": "1.1.21",
  "title": "The Real Numbers.",
  "body": " The Real Numbers   The set of real numbers   Set  Real Numbers  is the set with elements all real numbers, .     The set of real numbers.     "
},
{
  "id": "def-open_interval",
  "level": "2",
  "url": "sec-sets.html#def-open_interval",
  "type": "Definition",
  "number": "1.1.22",
  "title": "Open Interval.",
  "body": " Open Interval   Let and be real numbers and assume that . An open interval   Set  Interval  Open  is a set that takes one of the following forms.    "
},
{
  "id": "fig-open_intervals",
  "level": "2",
  "url": "sec-sets.html#fig-open_intervals",
  "type": "Figure",
  "number": "1.1.23",
  "title": "",
  "body": " The open intervals                            "
},
{
  "id": "def-closed_interval",
  "level": "2",
  "url": "sec-sets.html#def-closed_interval",
  "type": "Definition",
  "number": "1.1.24",
  "title": "Closed Interval.",
  "body": " Closed Interval   Let and be real numbers and assume that . A closed interval   Set  Interval  Closed  is a set that takes one of the following forms    "
},
{
  "id": "fig-closed_intervals",
  "level": "2",
  "url": "sec-sets.html#fig-closed_intervals",
  "type": "Figure",
  "number": "1.1.25",
  "title": "",
  "body": " The closed intervals                            "
},
{
  "id": "def-half_open_interval",
  "level": "2",
  "url": "sec-sets.html#def-half_open_interval",
  "type": "Definition",
  "number": "1.1.26",
  "title": "Half-Open Interval.",
  "body": " Half-Open Interval   Let and be real numbers and assume that . A half-open interval   Set  Interval  Half-Open  from to takes one of the following forms.    "
},
{
  "id": "fig-half_open_intervals",
  "level": "2",
  "url": "sec-sets.html#fig-half_open_intervals",
  "type": "Figure",
  "number": "1.1.27",
  "title": "",
  "body": " The half-open intervals                    "
},
{
  "id": "def-intersection",
  "level": "2",
  "url": "sec-sets.html#def-intersection",
  "type": "Definition",
  "number": "1.1.28",
  "title": "Intersection.",
  "body": " Intersection   Let and be sets. The intersection   Set  Intersection  of and is the set    "
},
{
  "id": "rmk-intersection_maximal",
  "level": "2",
  "url": "sec-sets.html#rmk-intersection_maximal",
  "type": "Remark",
  "number": "1.1.29",
  "title": "",
  "body": " The intersection is the largest set that is a subset of and a subset of .  "
},
{
  "id": "def-union",
  "level": "2",
  "url": "sec-sets.html#def-union",
  "type": "Definition",
  "number": "1.1.30",
  "title": "Union.",
  "body": " Union   Let and be sets. The union   Set  Union  of and is the set    "
},
{
  "id": "rmk-inclusive_or",
  "level": "2",
  "url": "sec-sets.html#rmk-inclusive_or",
  "type": "Remark",
  "number": "1.1.31",
  "title": "",
  "body": " In mathematics, the word or is inclusive . This means the condition or allows for the possibility that  and  .  "
},
{
  "id": "rmk-union_minimal",
  "level": "2",
  "url": "sec-sets.html#rmk-union_minimal",
  "type": "Remark",
  "number": "1.1.32",
  "title": "",
  "body": " The union is the smallest set that contains both and as subsets.  "
},
{
  "id": "eg-intersection_of_intervals",
  "level": "2",
  "url": "sec-sets.html#eg-intersection_of_intervals",
  "type": "Example",
  "number": "1.1.33",
  "title": "Intersection of Intervals.",
  "body": " Intersection of Intervals   Find the intersection of the intervals and . Sketch the intersection on a number line.    The intersection of the intervals and is the set    The intervals , , and their intersection                              "
},
{
  "id": "eg-union_of_intervals",
  "level": "2",
  "url": "sec-sets.html#eg-union_of_intervals",
  "type": "Example",
  "number": "1.1.35",
  "title": "Union of Intervals.",
  "body": " Union of Intervals   Find the union of the two intervals and . Sketch the union on a number line.    The union of the two intervals and is the set    The intervals , , and their union                              "
},
{
  "id": "sec-cartesian_coordinates",
  "level": "1",
  "url": "sec-cartesian_coordinates.html",
  "type": "Section",
  "number": "1.2",
  "title": "Cartesian Coordinates",
  "body": " Cartesian Coordinates   In mathematics, we are interested in studying how quantities change together. We will restrict our attention to two quantities at a time and will often find it useful to visualize these relationships. The Cartesian plane is the natural setting for these visualizations.      The Cartesian Plane    The Cartesian plane   Cartesian Plane  is a grid system used to describe locations using two perpendicular directions. The horizontal direction is usually called the -axis   Cartesian Plane  -axis  and the vertical direction is usually called the -axis .  Cartesian Plane  -axis  The plane is partitioned into four pieces called quadrants , depicted in      The Cartesian Plane      The type of things we are interested in locating will vary by application. In general, we will refer to these simply as points .  Cartesian Plane  Point  A point is located in the plane by its position relative to the -axis, called the -coordinate ,  Cartesian Plane  Point  -Coordinate  and relative to the -axis, called the -coordinate .  Cartesian Plane  Point  -Coordinate  By convention, we locate a point by first giving the -coordinate, then the -coordinate.    An ordered pair , , is the data of two real numbers. The collection of all ordered pairs of real numbers is     We encode the position of a point using its -coordinate and -coordinate using an ordered pair with the -coordinate first and the -coordinate second.   The - and -Coordinates of several points in the plane.       "
},
{
  "id": "def-cartesian_plane",
  "level": "2",
  "url": "sec-cartesian_coordinates.html#def-cartesian_plane",
  "type": "Definition",
  "number": "1.2.1",
  "title": "",
  "body": "  The Cartesian plane   Cartesian Plane  is a grid system used to describe locations using two perpendicular directions. The horizontal direction is usually called the -axis   Cartesian Plane  -axis  and the vertical direction is usually called the -axis .  Cartesian Plane  -axis  The plane is partitioned into four pieces called quadrants , depicted in    "
},
{
  "id": "fig-cartesian_plane",
  "level": "2",
  "url": "sec-cartesian_coordinates.html#fig-cartesian_plane",
  "type": "Figure",
  "number": "1.2.2",
  "title": "",
  "body": " The Cartesian Plane     "
},
{
  "id": "subsec-the_cartesian_plane-4",
  "level": "2",
  "url": "sec-cartesian_coordinates.html#subsec-the_cartesian_plane-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "points -coordinate -coordinate "
},
{
  "id": "def-ordered_pair",
  "level": "2",
  "url": "sec-cartesian_coordinates.html#def-ordered_pair",
  "type": "Definition",
  "number": "1.2.3",
  "title": "",
  "body": "  An ordered pair , , is the data of two real numbers. The collection of all ordered pairs of real numbers is    "
},
{
  "id": "fig-location_point",
  "level": "2",
  "url": "sec-cartesian_coordinates.html#fig-location_point",
  "type": "Figure",
  "number": "1.2.4",
  "title": "",
  "body": " The - and -Coordinates of several points in the plane.     "
},
{
  "id": "sec-graphing_equations",
  "level": "1",
  "url": "sec-graphing_equations.html",
  "type": "Section",
  "number": "1.3",
  "title": "Graphing Equations",
  "body": " Graphing Equations   When two quantities vary together, the relationship is modeled by an equation in two variables. By convention, mathematicians use the variables and . Often, it is convenient to visualize this relationship using a graph.    Solutions to an Equation   Solution to an Equation   A solution   Equation  Solution  to an equation in the variables and is an ordered pair that make the equation true when  the first coordinate, , is substituted into the equation for , and  the second coordinate, , is substituted into the equation for .       Consider the equation . The ordered pair is a solution to this equation because is a true statement. The ordered pair is not a solution to this equation because is a false statement.    Graph of an Equation   The graph   Equation  Graph  of an equation in the variables and consists of all the points in the plane that are solutions to the equation.    Most equations that we will encounter will have infinitely many solutions. Since we cannot find all of the solutions, we will mostly rely on studying the shape of certain graphs and some specific solutions.   -intercept   A of the form is called a -intercept .  Equation  -intercept                          -intercept   A of the form is called an -intercept .  Equation  -intercept       The graph of the equation is shown below. The -intercept occurs when and The -intercept occurs when and This tells us, as ordered pairs, the -intercept occurs at and the -intercept occurs at . In general, every point on this line has coordinates of the form , where can be any real number we choose.   The graph of the equation .         Horizontal Lines  The equation where is a constant has solutions of the form , where is allowed to be any real number. The graph of this equation is a horizontal line.    Graph the equation .    The solutions to the equation have the form , where is allowed to be any real number. The graph of this equation forms the -axis in the Cartesian plane.   The graph of           Graph the equation .    The equation simplifies to . The graph of this equation is a horizontal line units above the -axis.   The graph of .          Vertical Lines  The equation where is a constant has solutions of the form , where is allowed to be any real number. The graph of this equation is a vertical line.    Graph the equation .    The solutions to the equation have the form , where is allowed to be any real number. The graph of this equation forms the -axis in the Cartesian plane.   The graph of          Graph the equation .    The equation reduces to . The graph of this equation is a vertical line units to the right of the -axis.   The graph of .         "
},
{
  "id": "def-solution",
  "level": "2",
  "url": "sec-graphing_equations.html#def-solution",
  "type": "Definition",
  "number": "1.3.1",
  "title": "Solution to an Equation.",
  "body": " Solution to an Equation   A solution   Equation  Solution  to an equation in the variables and is an ordered pair that make the equation true when  the first coordinate, , is substituted into the equation for , and  the second coordinate, , is substituted into the equation for .     "
},
{
  "id": "eg-solution_to_2x_minus_2",
  "level": "2",
  "url": "sec-graphing_equations.html#eg-solution_to_2x_minus_2",
  "type": "Example",
  "number": "1.3.2",
  "title": "",
  "body": " Consider the equation . The ordered pair is a solution to this equation because is a true statement. The ordered pair is not a solution to this equation because is a false statement.  "
},
{
  "id": "def-graph",
  "level": "2",
  "url": "sec-graphing_equations.html#def-graph",
  "type": "Definition",
  "number": "1.3.3",
  "title": "Graph of an Equation.",
  "body": " Graph of an Equation   The graph   Equation  Graph  of an equation in the variables and consists of all the points in the plane that are solutions to the equation.   "
},
{
  "id": "def-y_intercept",
  "level": "2",
  "url": "sec-graphing_equations.html#def-y_intercept",
  "type": "Definition",
  "number": "1.3.4",
  "title": "<span class=\"process-math\">\\(y\\)<\/span>-intercept.",
  "body": " -intercept   A of the form is called a -intercept .  Equation  -intercept     "
},
{
  "id": "def-x_intercept",
  "level": "2",
  "url": "sec-graphing_equations.html#def-x_intercept",
  "type": "Definition",
  "number": "1.3.5",
  "title": "<span class=\"process-math\">\\(x\\)<\/span>-intercept.",
  "body": " -intercept   A of the form is called an -intercept .  Equation  -intercept     "
},
{
  "id": "eg-graph_2x_minus_2",
  "level": "2",
  "url": "sec-graphing_equations.html#eg-graph_2x_minus_2",
  "type": "Example",
  "number": "1.3.6",
  "title": "",
  "body": " The graph of the equation is shown below. The -intercept occurs when and The -intercept occurs when and This tells us, as ordered pairs, the -intercept occurs at and the -intercept occurs at . In general, every point on this line has coordinates of the form , where can be any real number we choose.   The graph of the equation .      "
},
{
  "id": "eg-equation_x_axis",
  "level": "2",
  "url": "sec-graphing_equations.html#eg-equation_x_axis",
  "type": "Example",
  "number": "1.3.8",
  "title": "",
  "body": "  Graph the equation .    The solutions to the equation have the form , where is allowed to be any real number. The graph of this equation forms the -axis in the Cartesian plane.   The graph of        "
},
{
  "id": "eg-horizontal_line",
  "level": "2",
  "url": "sec-graphing_equations.html#eg-horizontal_line",
  "type": "Example",
  "number": "1.3.10",
  "title": "",
  "body": "  Graph the equation .    The equation simplifies to . The graph of this equation is a horizontal line units above the -axis.   The graph of .       "
},
{
  "id": "eg-equation_y_axis",
  "level": "2",
  "url": "sec-graphing_equations.html#eg-equation_y_axis",
  "type": "Example",
  "number": "1.3.12",
  "title": "",
  "body": "  Graph the equation .    The solutions to the equation have the form , where is allowed to be any real number. The graph of this equation forms the -axis in the Cartesian plane.   The graph of       "
},
{
  "id": "eg-vertical_line",
  "level": "2",
  "url": "sec-graphing_equations.html#eg-vertical_line",
  "type": "Example",
  "number": "1.3.14",
  "title": "",
  "body": "  Graph the equation .    The equation reduces to . The graph of this equation is a vertical line units to the right of the -axis.   The graph of .       "
},
{
  "id": "sec-the_distance_formula",
  "level": "1",
  "url": "sec-the_distance_formula.html",
  "type": "Section",
  "number": "1.4",
  "title": "The Distance Formula",
  "body": " The Distance Formula   Within the Cartesian plane, we will often want to determine the distance between two points. In this section, we extend the notion of distance between two points on the number line to the Cartesian plane.    Distance in One Dimension    The distance   Distance  Number Line  between two numbers and on a number line is given by the formula This number measures the length of the segment of the number line between and , as depicted in .     The distance between points on the number line.        Distance in Two Dimensions  Using the Pythagorean Theorem and the distance between two numbers, we can determine the distance between points in the plane.   The Pythagorean Theorem   The right triangle in satisfies the equation    Right triangle with sides of length , , and .        Given two points and , we can introduce a third point to create a triangle, as in .   The triangle formed by adding in the point .      From , we can see the length of the horizontal side is the distance between the points and along the -axis. Similarly, the length of the vertical side is the distance between the points and along the -axis. Using , we have If we square these two side lengths, then By the Pythagorean Theorem, the length of the line segment that connects the points and is    The Distance Formula   The distance   Distance  Cartesian Plane  between the points and in the Cartesian plane is given by This number measures the length of the line segment connecting the two points.      Find the distance between the points and .    By the distance between the points and is      "
},
{
  "id": "def-1_distance",
  "level": "2",
  "url": "sec-the_distance_formula.html#def-1_distance",
  "type": "Definition",
  "number": "1.4.1",
  "title": "",
  "body": "  The distance   Distance  Number Line  between two numbers and on a number line is given by the formula This number measures the length of the segment of the number line between and , as depicted in .   "
},
{
  "id": "fig-1_distance",
  "level": "2",
  "url": "sec-the_distance_formula.html#fig-1_distance",
  "type": "Figure",
  "number": "1.4.2",
  "title": "",
  "body": " The distance between points on the number line.     "
},
{
  "id": "thm-pythagorean",
  "level": "2",
  "url": "sec-the_distance_formula.html#thm-pythagorean",
  "type": "Theorem",
  "number": "1.4.3",
  "title": "The Pythagorean Theorem.",
  "body": " The Pythagorean Theorem   The right triangle in satisfies the equation    Right triangle with sides of length , , and .       "
},
{
  "id": "fig-2_distance",
  "level": "2",
  "url": "sec-the_distance_formula.html#fig-2_distance",
  "type": "Figure",
  "number": "1.4.5",
  "title": "",
  "body": " The triangle formed by adding in the point .     "
},
{
  "id": "def-2_distance",
  "level": "2",
  "url": "sec-the_distance_formula.html#def-2_distance",
  "type": "Definition",
  "number": "1.4.6",
  "title": "The Distance Formula.",
  "body": " The Distance Formula   The distance   Distance  Cartesian Plane  between the points and in the Cartesian plane is given by This number measures the length of the line segment connecting the two points.   "
},
{
  "id": "eg-distance_between_points",
  "level": "2",
  "url": "sec-the_distance_formula.html#eg-distance_between_points",
  "type": "Example",
  "number": "1.4.7",
  "title": "",
  "body": "  Find the distance between the points and .    By the distance between the points and is    "
},
{
  "id": "sec-midpoint",
  "level": "1",
  "url": "sec-midpoint.html",
  "type": "Section",
  "number": "1.5",
  "title": "The Midpoint Formula",
  "body": " The Midpoint Formula   Within the Cartesian plane, we will often want to determine the midpoint between two points. In this section, we extend the notion of midpoint between two points on the number line to the Cartesian plane.    Midpoint in One Dimension    The midpoint   Midpoint  Number Line  between two numbers and on the number line is given by the formula as depicted in .     Midpoint between two numbers       The midpoint is so named because it is halfway between the numbers and . We can check this using : the distance from to the midpoint is and the distance from the midpoint to is      Midpoitn in Two Dimensions  Similar to the distance formula, we can find the midpoint of a line segment between the points and in the Cartesian plane using a triangle. We use to find the midpoint of the vertical and horizontal sides of the triangle, and use those as the coordinates for the midpoint as depicted in .   The triangle formed by adding in the point .       The Midpoint Formula   The midpoint   Midpoint  Cartesian Plane  between and in the Cartesian plane is the point       Use to find the midpoint between and     The -coordinate of the midpoint is and the -coordinate of the midpoint is Therefore the midpoint is      Just as with the midpoint on the real line, the midpoint is halfway between the points and . The easiest way to see this is true is to make two smaller triangles inside the bigger triangle, as depicted in .   The triangle formed by adding in the point .      The two shaded triangles have the same side lengths. The horizontal side has length and the vertical side has length Using , the third side of each triangle has length which is exactly half the distance between the points and .    "
},
{
  "id": "def-1_midpoint",
  "level": "2",
  "url": "sec-midpoint.html#def-1_midpoint",
  "type": "Definition",
  "number": "1.5.1",
  "title": "",
  "body": "  The midpoint   Midpoint  Number Line  between two numbers and on the number line is given by the formula as depicted in .   "
},
{
  "id": "fig-1_midpoint",
  "level": "2",
  "url": "sec-midpoint.html#fig-1_midpoint",
  "type": "Figure",
  "number": "1.5.2",
  "title": "",
  "body": " Midpoint between two numbers     "
},
{
  "id": "subsec-midpoint_one_dimension-4",
  "level": "2",
  "url": "sec-midpoint.html#subsec-midpoint_one_dimension-4",
  "type": "Remark",
  "number": "1.5.3",
  "title": "",
  "body": " The midpoint is so named because it is halfway between the numbers and . We can check this using : the distance from to the midpoint is and the distance from the midpoint to is   "
},
{
  "id": "fig-2_midpoint",
  "level": "2",
  "url": "sec-midpoint.html#fig-2_midpoint",
  "type": "Figure",
  "number": "1.5.4",
  "title": "",
  "body": " The triangle formed by adding in the point .     "
},
{
  "id": "def-2_midpoint",
  "level": "2",
  "url": "sec-midpoint.html#def-2_midpoint",
  "type": "Definition",
  "number": "1.5.5",
  "title": "The Midpoint Formula.",
  "body": " The Midpoint Formula   The midpoint   Midpoint  Cartesian Plane  between and in the Cartesian plane is the point    "
},
{
  "id": "sec-midpoint-4-5",
  "level": "2",
  "url": "sec-midpoint.html#sec-midpoint-4-5",
  "type": "Example",
  "number": "1.5.6",
  "title": "",
  "body": "  Use to find the midpoint between and     The -coordinate of the midpoint is and the -coordinate of the midpoint is Therefore the midpoint is    "
},
{
  "id": "rmk-2_midpoint_is_midpoint",
  "level": "2",
  "url": "sec-midpoint.html#rmk-2_midpoint_is_midpoint",
  "type": "Remark",
  "number": "1.5.7",
  "title": "",
  "body": " Just as with the midpoint on the real line, the midpoint is halfway between the points and . The easiest way to see this is true is to make two smaller triangles inside the bigger triangle, as depicted in .   The triangle formed by adding in the point .      The two shaded triangles have the same side lengths. The horizontal side has length and the vertical side has length Using , the third side of each triangle has length which is exactly half the distance between the points and .  "
},
{
  "id": "sec-circles",
  "level": "1",
  "url": "sec-circles.html",
  "type": "Section",
  "number": "1.6",
  "title": "Circles",
  "body": " Circles  In this section, we study circles in the Cartesian plane.    The circle   Circle  with radius centered at consists of all points in the Cartesian plane units away from as depicted in .     The circle of radius centered at .      To find the equation of the circle with radius and center we use . A point is on this circle if the distance between and is exactly : To make this simpler, we square each side of the equation.   The Standard Form of a Circle   The standard form of a circle   Equation  Circle  Standard Form  with radius and center is       A diameter   Circle  Diameter  of a circle is a line that connects two points on the circle through the center. The length of a diameter of a circle of radius is , and the midpoint of the diameter is the center of the circle.     A diameter of the circle of radius centered at .      "
},
{
  "id": "def-circle",
  "level": "2",
  "url": "sec-circles.html#def-circle",
  "type": "Definition",
  "number": "1.6.1",
  "title": "",
  "body": "  The circle   Circle  with radius centered at consists of all points in the Cartesian plane units away from as depicted in .   "
},
{
  "id": "fig-circle_def",
  "level": "2",
  "url": "sec-circles.html#fig-circle_def",
  "type": "Figure",
  "number": "1.6.2",
  "title": "",
  "body": " The circle of radius centered at .     "
},
{
  "id": "sec-circles-6",
  "level": "2",
  "url": "sec-circles.html#sec-circles-6",
  "type": "Definition",
  "number": "1.6.3",
  "title": "The Standard Form of a Circle.",
  "body": " The Standard Form of a Circle   The standard form of a circle   Equation  Circle  Standard Form  with radius and center is    "
},
{
  "id": "sec-circles-7",
  "level": "2",
  "url": "sec-circles.html#sec-circles-7",
  "type": "Definition",
  "number": "1.6.4",
  "title": "",
  "body": "  A diameter   Circle  Diameter  of a circle is a line that connects two points on the circle through the center. The length of a diameter of a circle of radius is , and the midpoint of the diameter is the center of the circle.   "
},
{
  "id": "fig-diameter",
  "level": "2",
  "url": "sec-circles.html#fig-diameter",
  "type": "Figure",
  "number": "1.6.5",
  "title": "",
  "body": " A diameter of the circle of radius centered at .     "
},
{
  "id": "sec-functions",
  "level": "1",
  "url": "sec-functions.html",
  "type": "Section",
  "number": "2.1",
  "title": "Functions",
  "body": " Functions   In nearly every branch of mathematics, functions are the primary objects of study. Functions provide a robust language for describing relationships between sets, and serve as the basic building blocks for modern development of algebra, geometry, trigonometry, calculus, and beyond. We develop techniques for analyzing and visualizing functions that are foundational in subsequent mathematics courses and also applicable outside of mathematics in science, technology, and engineering to model the behavior of systems.    Algebraic Functions   Function   Assume and are sets. A function from to ,  Function  written ,     Function from to  is a rule that assigns to each element a unique element .     Value of the function at     The set is the domain   Function  Domain  of . The domain of is the set of all allowable input values to the function .    The set is the codomain   Function  Codomain  of . The codomain of is the set that contains all possible output values of .    The range   Function  Range  of is the set of all possible output values    Range of         While functions are defined for arbitrary sets, we will restrict our attention to functions of the form , where is some subset of . By convention, we will use the variable to stand for some input value from the domain of .  It is common to refer to  read \" of \" as the value of at or the image of under . We will normally use the variable to stand for some output value in the range of . This relationship is made explicit by writing or saying that is a function of . Generally, the value of is determined by a choice of a specific . We call the independent variable   Function  Independent Variable  and the dependent variable .  Function  Dependent Variable    When we start from two sets and and write down a rule that assigns to each an element , we are defining a function explicitly .  Function  Explicit  Most interesting subsets of the real numbers are simply too large to provide an explicit definition. To get around this problem, we often rely on algebraic expression involving a variable, , to define our functions. These expressions are built using the operations of addition, subtraction, multiplication, division, and roots, and are called algebraic functions .  Function  Algebraic    When we write down an equation like we are defining a function implicitly .  Function  Implicit  We have not explicitly stated the domain of the function, so this function has an implied domain ,  Function  Domain  Implied  that consists of all real numbers for which the expression makes sense.    Find the implied domain and the range of the implicit function .    Since the ratio makes sense for all numbers except , the implied domain is the set   The range of this function is the set of real numbers that can be written as for some non-zero real number . If is any non-zero real number, then we can write Therefore the range of the implicit function is the set of all non-zero real numbers       Find the domain and range of the function .    The domain of is because for any real number , is always well-defined. The codomain of this function is also because for any real number , will also be a real number. To find the range, we want to describe the set   We can show this is by showing that for every real number , we can find a number such that . We simply solve this equation for in terms of  For example, if , then this formula tells us this corresponds to the input       Find the domain and range of the function .    The domain of is because for any real number , is always well-defined. The codomain of this function is also because for any real number , is a real number. To find the range, we want to describe the set   Given a real number , we want to determine whether the equation can be solved for .  When , there is exactly one solution: .  When , there are two solutions: and .  When , there are no solutions because the square root of a negative number is not a real number.  This tells us the range of our function is the interval .      Comparing Functions  Whenever we define a new mathematical object, it is important to understand when two objects are the same . For functions with the same domain and codomain, we measure equality based on the output.   Equality of Functions   Two functions and are equal   Function  Equality  if for every , .  We write      Equality of functions  to indicate that and represent the same function.      The functions defined by and are equal.    The functions and have the same domain and codomain, so it makes sense to compare these functions. For every real number  and       The functions defined by and are not equal.    It suffices to find any element of the domain where the function values are not the same. The value of at is but the value of at is Since these are not the same, we conclude .      Graphing Functions  The ability to visualize a function often provides an immense amount of insight into how the function behaves. The graph of a function is defined in a manner similar to the graph of an equation.   Graph of a Function   Assume . The graph of a function is the set of points     When the function is implicitly defined by an equation in the variables and , the will coincide with the . While most of the functions we consider will be defined by an equation in the variables and , it is not the case that all equations in and define as a function of .   The Vertical Line Test   An equation in the variables and is defines as a function of if and only if every vertical line intersects the graph of the relation in at most one point.      Consider the function defined by the rule .    Verify that is a function algebraically.   We interpret the algebraically as follows. From the , the graph of the vertical line is the set and the graph of is the set   To say these graphs intersect is to say there is a point in the intersection of these two sets. The condition for membership on the graph of determines the value of such a point and the definition of the graph of determines the -coordinate: . This tells us the line intersects the graph of at the single point .    Verify that is a function visually.   It is simpler to see that if we draw any vertical line to the right of the -axis, then there is exactly one point of intersection with the graph of .   The graph and .          The equation does not define as a function of .    Recall that for every positive number , there are always two square roots: and . This tells us the ordered pairs and both satisfy the equation For example, the ordered pairs and satisfy Since the definition a requires that each element of the domain corresponds to exactly one element of the codomain, we see this cannot be a function. That is, equation fails the .  The graph of the equation and the line .          "
},
{
  "id": "def-function",
  "level": "2",
  "url": "sec-functions.html#def-function",
  "type": "Definition",
  "number": "2.1.1",
  "title": "Function.",
  "body": " Function   Assume and are sets. A function from to ,  Function  written ,     Function from to  is a rule that assigns to each element a unique element .     Value of the function at     The set is the domain   Function  Domain  of . The domain of is the set of all allowable input values to the function .    The set is the codomain   Function  Codomain  of . The codomain of is the set that contains all possible output values of .    The range   Function  Range  of is the set of all possible output values    Range of        "
},
{
  "id": "subsec-algebraic_functions-4",
  "level": "2",
  "url": "sec-functions.html#subsec-algebraic_functions-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "value of at image of under independent variable dependent variable "
},
{
  "id": "subsec-algebraic_functions-5",
  "level": "2",
  "url": "sec-functions.html#subsec-algebraic_functions-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "explicitly algebraic functions "
},
{
  "id": "subsec-algebraic_functions-6",
  "level": "2",
  "url": "sec-functions.html#subsec-algebraic_functions-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "implicitly implied domain "
},
{
  "id": "subsec-algebraic_functions-7",
  "level": "2",
  "url": "sec-functions.html#subsec-algebraic_functions-7",
  "type": "Example",
  "number": "2.1.2",
  "title": "",
  "body": "  Find the implied domain and the range of the implicit function .    Since the ratio makes sense for all numbers except , the implied domain is the set   The range of this function is the set of real numbers that can be written as for some non-zero real number . If is any non-zero real number, then we can write Therefore the range of the implicit function is the set of all non-zero real numbers    "
},
{
  "id": "subsec-algebraic_functions-8",
  "level": "2",
  "url": "sec-functions.html#subsec-algebraic_functions-8",
  "type": "Example",
  "number": "2.1.3",
  "title": "",
  "body": "  Find the domain and range of the function .    The domain of is because for any real number , is always well-defined. The codomain of this function is also because for any real number , will also be a real number. To find the range, we want to describe the set   We can show this is by showing that for every real number , we can find a number such that . We simply solve this equation for in terms of  For example, if , then this formula tells us this corresponds to the input    "
},
{
  "id": "subsec-algebraic_functions-9",
  "level": "2",
  "url": "sec-functions.html#subsec-algebraic_functions-9",
  "type": "Example",
  "number": "2.1.4",
  "title": "",
  "body": "  Find the domain and range of the function .    The domain of is because for any real number , is always well-defined. The codomain of this function is also because for any real number , is a real number. To find the range, we want to describe the set   Given a real number , we want to determine whether the equation can be solved for .  When , there is exactly one solution: .  When , there are two solutions: and .  When , there are no solutions because the square root of a negative number is not a real number.  This tells us the range of our function is the interval .   "
},
{
  "id": "sec-functions-4-3",
  "level": "2",
  "url": "sec-functions.html#sec-functions-4-3",
  "type": "Definition",
  "number": "2.1.5",
  "title": "Equality of Functions.",
  "body": " Equality of Functions   Two functions and are equal   Function  Equality  if for every , .  We write      Equality of functions  to indicate that and represent the same function.   "
},
{
  "id": "sec-functions-4-4",
  "level": "2",
  "url": "sec-functions.html#sec-functions-4-4",
  "type": "Example",
  "number": "2.1.6",
  "title": "",
  "body": "  The functions defined by and are equal.    The functions and have the same domain and codomain, so it makes sense to compare these functions. For every real number  and    "
},
{
  "id": "sec-functions-4-5",
  "level": "2",
  "url": "sec-functions.html#sec-functions-4-5",
  "type": "Example",
  "number": "2.1.7",
  "title": "",
  "body": "  The functions defined by and are not equal.    It suffices to find any element of the domain where the function values are not the same. The value of at is but the value of at is Since these are not the same, we conclude .   "
},
{
  "id": "def-graph_function",
  "level": "2",
  "url": "sec-functions.html#def-graph_function",
  "type": "Definition",
  "number": "2.1.8",
  "title": "Graph of a Function.",
  "body": " Graph of a Function   Assume . The graph of a function is the set of points    "
},
{
  "id": "thm-vertical_line_test",
  "level": "2",
  "url": "sec-functions.html#thm-vertical_line_test",
  "type": "Theorem",
  "number": "2.1.9",
  "title": "The Vertical Line Test.",
  "body": " The Vertical Line Test   An equation in the variables and is defines as a function of if and only if every vertical line intersects the graph of the relation in at most one point.   "
},
{
  "id": "sec-functions-5-6",
  "level": "2",
  "url": "sec-functions.html#sec-functions-5-6",
  "type": "Example",
  "number": "2.1.10",
  "title": "",
  "body": "  Consider the function defined by the rule .    Verify that is a function algebraically.   We interpret the algebraically as follows. From the , the graph of the vertical line is the set and the graph of is the set   To say these graphs intersect is to say there is a point in the intersection of these two sets. The condition for membership on the graph of determines the value of such a point and the definition of the graph of determines the -coordinate: . This tells us the line intersects the graph of at the single point .    Verify that is a function visually.   It is simpler to see that if we draw any vertical line to the right of the -axis, then there is exactly one point of intersection with the graph of .   The graph and .       "
},
{
  "id": "sec-functions-5-7",
  "level": "2",
  "url": "sec-functions.html#sec-functions-5-7",
  "type": "Example",
  "number": "2.1.12",
  "title": "",
  "body": "  The equation does not define as a function of .    Recall that for every positive number , there are always two square roots: and . This tells us the ordered pairs and both satisfy the equation For example, the ordered pairs and satisfy Since the definition a requires that each element of the domain corresponds to exactly one element of the codomain, we see this cannot be a function. That is, equation fails the .  The graph of the equation and the line .        "
},
{
  "id": "sec-avg_roc",
  "level": "1",
  "url": "sec-avg_roc.html",
  "type": "Section",
  "number": "2.2",
  "title": "Measures of Change",
  "body": " Measures of Change   Functions are important tools in the application of mathematics because they allow us to formalize the relationship between two quantities. We are often interested in answering questions precisely about how the dependent variable responds to changes in the independent variable. While it is useful to be able to precisely quantify this relationship, it is often easier to understand these relationships visually. Our goal is to build a dictionary between the algebraic measures of change and the features of the graph.    Intervals of Increase and Decrease  The terms increasing and decreasing are useful qualitative descriptions of a function's behavior. A function is increasing if its -values increase as its -values increase and decreases if its -values decrease as its -values increase. This is easy to detect visually because either the height of the graph increases or decreases as you trace the graph from left to right.   Graphs of increasing and decreasing functions    An increasing function       A decreasing function        Unfortunately, many interesting functions are not simply increasing or decreasing. Rather, most interesting functions have pieces that are increasing and pieces that are decreasing.   The graph of a function that is neither increasing nor decreasing      For this reason, we define increasing and decreasing on an interval to provide the flexibility to describe a range of interesting functions.    Assume and . We say the function is    increasing   Function  Increasing  on the interval if for every ,      decreasing   Function  Decreasing  on the interval if for every ,        Points where the graph changes between increasing and decreasing are often interesting features of the graph. These points are known collectively as local extrema .  Function  Local Extrema      Assume . The function has a local maximum   Function  Local Maximum  at if there exist values such that    is increasing on the interval , and     is decreasing on the interval .     We say is a local maximum value   Function  Local Maximum Value        Assume . The function has a local minimum   Function  Local Minimum  at if there exist values such that    is decreasing on the interval , and     is increasing on the interval .     We say is a local minimum value   Function  Local Minimum Value        Use the following graph to find the intervals of increase and decrease. Identify all local extrema.   The graph of        The graph of is increasing on the intervals    ,     , and        The graph of is decreasing on the intervals    , and          The points and are local maxima and the points and are local minima.      Average Rate of Change  The rate at which changes as changes is a quantitative measure of change. Suppose we have the following data about a five hour road trip.   Distance Driven as a Function of Time    Time  Miles Driven    12:00 PM     1:00 PM     2:00 PM     3:00 PM     4:00 PM     5:00 PM      While we cannot pinpoint exactly how fast the car was moving at any given time, we can use this data to give a rough estimate for the speed of the car over a period of time. If we wanted to estimate the speed of the car over the two hour period from 3:00 PM until 5:00 PM, we could take the distance traveled and divide it by the number of hours traveled to obtain This represents the average speed of the car during this period of time. This idea generalizes to arbitrary functions naturally.   The Average Rate of Change   Assume is a function and the domain of contains the interval . The average rate of change   Function  Average Rate of Change  of on the interval is       An object is thrown straight up in the air. The object reaches a maximum height of 1 meter after 1 second, and returns to the thrower's hand after 2 seconds. The function models the height of the object in meters as a function of seconds.   The graph of        What is the average rate of change for the function on the interval ? Interpret the meaning of this number.   Using , the average rate of change on the interval is This tells us the object is moving up at an average rate of 1 meter per second.    What is the average rate of change for the function on the interval ? Interpret the meaning of this number.   Using , the average rate of change on the interval is This tells us the object is falling back at an average rate of 1 meter per second.    What is the average rate of change for the function on the interval ?   Using , the average rate of change on the interval is We can interpret this as saying the object climbs and falls at the same speed.     "
},
{
  "id": "fig-monotone",
  "level": "2",
  "url": "sec-avg_roc.html#fig-monotone",
  "type": "Figure",
  "number": "2.2.1",
  "title": "",
  "body": " Graphs of increasing and decreasing functions    An increasing function       A decreasing function       "
},
{
  "id": "fig-non_monotone",
  "level": "2",
  "url": "sec-avg_roc.html#fig-non_monotone",
  "type": "Figure",
  "number": "2.2.2",
  "title": "",
  "body": " The graph of a function that is neither increasing nor decreasing     "
},
{
  "id": "sec-avg_roc-3-7",
  "level": "2",
  "url": "sec-avg_roc.html#sec-avg_roc-3-7",
  "type": "Definition",
  "number": "2.2.3",
  "title": "",
  "body": "  Assume and . We say the function is    increasing   Function  Increasing  on the interval if for every ,      decreasing   Function  Decreasing  on the interval if for every ,       "
},
{
  "id": "sec-avg_roc-3-8",
  "level": "2",
  "url": "sec-avg_roc.html#sec-avg_roc-3-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "local extrema "
},
{
  "id": "sec-avg_roc-3-9",
  "level": "2",
  "url": "sec-avg_roc.html#sec-avg_roc-3-9",
  "type": "Definition",
  "number": "2.2.4",
  "title": "",
  "body": "  Assume . The function has a local maximum   Function  Local Maximum  at if there exist values such that    is increasing on the interval , and     is decreasing on the interval .     We say is a local maximum value   Function  Local Maximum Value     "
},
{
  "id": "sec-avg_roc-3-10",
  "level": "2",
  "url": "sec-avg_roc.html#sec-avg_roc-3-10",
  "type": "Definition",
  "number": "2.2.5",
  "title": "",
  "body": "  Assume . The function has a local minimum   Function  Local Minimum  at if there exist values such that    is decreasing on the interval , and     is increasing on the interval .     We say is a local minimum value   Function  Local Minimum Value     "
},
{
  "id": "sec-avg_roc-3-11",
  "level": "2",
  "url": "sec-avg_roc.html#sec-avg_roc-3-11",
  "type": "Example",
  "number": "2.2.6",
  "title": "",
  "body": "  Use the following graph to find the intervals of increase and decrease. Identify all local extrema.   The graph of        The graph of is increasing on the intervals    ,     , and        The graph of is decreasing on the intervals    , and          The points and are local maxima and the points and are local minima.   "
},
{
  "id": "sec-avg_roc-4-3",
  "level": "2",
  "url": "sec-avg_roc.html#sec-avg_roc-4-3",
  "type": "Table",
  "number": "2.2.8",
  "title": "Distance Driven as a Function of Time",
  "body": " Distance Driven as a Function of Time    Time  Miles Driven    12:00 PM     1:00 PM     2:00 PM     3:00 PM     4:00 PM     5:00 PM     "
},
{
  "id": "def-average_rate_of_change",
  "level": "2",
  "url": "sec-avg_roc.html#def-average_rate_of_change",
  "type": "Definition",
  "number": "2.2.9",
  "title": "The Average Rate of Change.",
  "body": " The Average Rate of Change   Assume is a function and the domain of contains the interval . The average rate of change   Function  Average Rate of Change  of on the interval is    "
},
{
  "id": "sec-avg_roc-4-6",
  "level": "2",
  "url": "sec-avg_roc.html#sec-avg_roc-4-6",
  "type": "Example",
  "number": "2.2.10",
  "title": "",
  "body": "  An object is thrown straight up in the air. The object reaches a maximum height of 1 meter after 1 second, and returns to the thrower's hand after 2 seconds. The function models the height of the object in meters as a function of seconds.   The graph of        What is the average rate of change for the function on the interval ? Interpret the meaning of this number.   Using , the average rate of change on the interval is This tells us the object is moving up at an average rate of 1 meter per second.    What is the average rate of change for the function on the interval ? Interpret the meaning of this number.   Using , the average rate of change on the interval is This tells us the object is falling back at an average rate of 1 meter per second.    What is the average rate of change for the function on the interval ?   Using , the average rate of change on the interval is We can interpret this as saying the object climbs and falls at the same speed.   "
},
{
  "id": "sec-transformations",
  "level": "1",
  "url": "sec-transformations.html",
  "type": "Section",
  "number": "2.3",
  "title": "Graph Transformations",
  "body": " Graph Transformations   Graphing arbitrary functions can be a difficult task and the general methods are beyond the scope of basic algebra. However, if we know the graph of a function, , and we can write another function, , in terms of in a specific way, then we can use the graph of to graph using transformations . In this seciton, we discuss three types of transformations: translation, scaling, and reflection.    Vertical Translation   Vertical Translation   Let be a positive number. We say the function is a vertical translation   Graph  Tranformation  Vertical Translation  of the function if .   The graph of is obtained by shifting the graph of up the -axis by units.    The graph of is obtained by shifting the graph of down the -axis by -units.         Use the graph of to graph the functions and .    The graph of is obtained by shifting the graph of up the -axis by units, and the graph of is obtained by shifting the graph of down the -axis by 3 units.   Vertical translations of up by and down by .          Horizontal Translation   Horizontal Translation   Let be a positive number. We say the function is a horizontal translation   Graph  Tranformation  Translation Horizontal  of the function if .   The graph of is obtained by shifting the graph of to the right along the -axis by units.    The graph of is obtained by shifting the graph of to the left along the -axis by -units.         Use the graph of to graph the functions and .    The graph of is obtained by translating the graph of to the left along the -axis by units, and the graph of is obtained by translating the graph of to the right along the -axis by 3 units.   Horizontal translation of to the left by and to the right by          Vertical Scaling   Vertical Scaling   Let be a number. We say the function is a vertical scaling   Graph  Tranformation  Vertical Scaling  of the function if or .   The graph of is obtained by stretching the graph of vertically by a factor of .    The graph of is obtained by compressing the graph of vertically by a factor of .         Use the graph of to graph the functions and .    The graph of is obtained by stretching the graph of vertically by a factor of , and the graph of is obtained by compressing the graph the graph of vertically by a factor of .   Vertical scaling of by and          Reflection   Reflection   We say the function is a reflection   Graph  Tranformation  Reflection  of if either or    The graph of is obtained by reflecting the graph of over the -axis.    The graph of is obtained by reflecting the graph of over the -axis.         Use the graph of to graph the functions and .    The graph of is obtained by reflecting the graph of over the -axis, and the graph of is obtained by reflecting the graph of over the -axis.   Reflection of across the -axis and -axis.          Horizontal Scaling   Horizontal Scaling   Let be a number. We say the function is a horizontal scaling   Graph  Tranformation  Horizontal Scaling  of the function if or .   The graph of is obtained by compressing the graph of horizontally by a factor of .    The graph of is obtained by stretching the graph of horizontally by a factor of .         Use the graph of to graph the functions and .    The graph of is obtained by compressing the graph of horizontally by a factor of , and the graph of is obtained by stretching the graph of horizontally by a factor of .   Horizontal scaling of by and          Combining Graph Transformations  Most functions are obtained from a basic function using multiple transformations. When graphing a function, the order in which transformations are applied is important.   Graphing Functions using Transformations     Horizontal Translation  Scaling  Reflection  Vertical Translation        Use the graph of to graph the function .    We can graph by starting from the basic function and applying the following transformations:  Translate the graph of to the left by 3 to obtain the graph of .  Stretch the graph of vertically by a factor of 2 to obtain the graph of .  Translate the graph of down by 2 units to obtain the graph of .     The sequence of transformations to obtain the graph of from         "
},
{
  "id": "def-vertical_translation",
  "level": "2",
  "url": "sec-transformations.html#def-vertical_translation",
  "type": "Definition",
  "number": "2.3.1",
  "title": "Vertical Translation.",
  "body": " Vertical Translation   Let be a positive number. We say the function is a vertical translation   Graph  Tranformation  Vertical Translation  of the function if .   The graph of is obtained by shifting the graph of up the -axis by units.    The graph of is obtained by shifting the graph of down the -axis by -units.      "
},
{
  "id": "sec-transformations-3-3",
  "level": "2",
  "url": "sec-transformations.html#sec-transformations-3-3",
  "type": "Example",
  "number": "2.3.2",
  "title": "",
  "body": "  Use the graph of to graph the functions and .    The graph of is obtained by shifting the graph of up the -axis by units, and the graph of is obtained by shifting the graph of down the -axis by 3 units.   Vertical translations of up by and down by .       "
},
{
  "id": "def-horizontal_translation",
  "level": "2",
  "url": "sec-transformations.html#def-horizontal_translation",
  "type": "Definition",
  "number": "2.3.4",
  "title": "Horizontal Translation.",
  "body": " Horizontal Translation   Let be a positive number. We say the function is a horizontal translation   Graph  Tranformation  Translation Horizontal  of the function if .   The graph of is obtained by shifting the graph of to the right along the -axis by units.    The graph of is obtained by shifting the graph of to the left along the -axis by -units.      "
},
{
  "id": "sec-transformations-4-3",
  "level": "2",
  "url": "sec-transformations.html#sec-transformations-4-3",
  "type": "Example",
  "number": "2.3.5",
  "title": "",
  "body": "  Use the graph of to graph the functions and .    The graph of is obtained by translating the graph of to the left along the -axis by units, and the graph of is obtained by translating the graph of to the right along the -axis by 3 units.   Horizontal translation of to the left by and to the right by       "
},
{
  "id": "def-vertical_scaling",
  "level": "2",
  "url": "sec-transformations.html#def-vertical_scaling",
  "type": "Definition",
  "number": "2.3.7",
  "title": "Vertical Scaling.",
  "body": " Vertical Scaling   Let be a number. We say the function is a vertical scaling   Graph  Tranformation  Vertical Scaling  of the function if or .   The graph of is obtained by stretching the graph of vertically by a factor of .    The graph of is obtained by compressing the graph of vertically by a factor of .      "
},
{
  "id": "sec-transformations-5-3",
  "level": "2",
  "url": "sec-transformations.html#sec-transformations-5-3",
  "type": "Example",
  "number": "2.3.8",
  "title": "",
  "body": "  Use the graph of to graph the functions and .    The graph of is obtained by stretching the graph of vertically by a factor of , and the graph of is obtained by compressing the graph the graph of vertically by a factor of .   Vertical scaling of by and       "
},
{
  "id": "def-reflection",
  "level": "2",
  "url": "sec-transformations.html#def-reflection",
  "type": "Definition",
  "number": "2.3.10",
  "title": "Reflection.",
  "body": " Reflection   We say the function is a reflection   Graph  Tranformation  Reflection  of if either or    The graph of is obtained by reflecting the graph of over the -axis.    The graph of is obtained by reflecting the graph of over the -axis.      "
},
{
  "id": "sec-transformations-6-3",
  "level": "2",
  "url": "sec-transformations.html#sec-transformations-6-3",
  "type": "Example",
  "number": "2.3.11",
  "title": "",
  "body": "  Use the graph of to graph the functions and .    The graph of is obtained by reflecting the graph of over the -axis, and the graph of is obtained by reflecting the graph of over the -axis.   Reflection of across the -axis and -axis.       "
},
{
  "id": "def-horizontal_scaling",
  "level": "2",
  "url": "sec-transformations.html#def-horizontal_scaling",
  "type": "Definition",
  "number": "2.3.13",
  "title": "Horizontal Scaling.",
  "body": " Horizontal Scaling   Let be a number. We say the function is a horizontal scaling   Graph  Tranformation  Horizontal Scaling  of the function if or .   The graph of is obtained by compressing the graph of horizontally by a factor of .    The graph of is obtained by stretching the graph of horizontally by a factor of .      "
},
{
  "id": "sec-transformations-7-3",
  "level": "2",
  "url": "sec-transformations.html#sec-transformations-7-3",
  "type": "Example",
  "number": "2.3.14",
  "title": "",
  "body": "  Use the graph of to graph the functions and .    The graph of is obtained by compressing the graph of horizontally by a factor of , and the graph of is obtained by stretching the graph of horizontally by a factor of .   Horizontal scaling of by and       "
},
{
  "id": "sec-transformations-8-3",
  "level": "2",
  "url": "sec-transformations.html#sec-transformations-8-3",
  "type": "Algorithm",
  "number": "2.3.16",
  "title": "Graphing Functions using Transformations.",
  "body": " Graphing Functions using Transformations     Horizontal Translation  Scaling  Reflection  Vertical Translation     "
},
{
  "id": "sec-transformations-8-4",
  "level": "2",
  "url": "sec-transformations.html#sec-transformations-8-4",
  "type": "Example",
  "number": "2.3.17",
  "title": "",
  "body": "  Use the graph of to graph the function .    We can graph by starting from the basic function and applying the following transformations:  Translate the graph of to the left by 3 to obtain the graph of .  Stretch the graph of vertically by a factor of 2 to obtain the graph of .  Translate the graph of down by 2 units to obtain the graph of .     The sequence of transformations to obtain the graph of from       "
},
{
  "id": "sec-symmetry",
  "level": "1",
  "url": "sec-symmetry.html",
  "type": "Section",
  "number": "2.4",
  "title": "Symmetry",
  "body": " Symmetry   Intuitively, an object is symmetric if there is some line that divides the object into two (or more) pieces that are mirror images of one another. In this section, we utilize the methods in to detect two types of symmetry mathematically.    Symmetry about the -axis  The first type of symmetry we are interested in is symmetry about the -axis in the plane. We begin with the intuitive understanding of this symmetry, and formalize a concrete method for detecting it algebraically.    We say a function has -axis symmetry   Function  Symmetry  -axis  if the -axis divides the graph into two pieces that are mirror images of one another.    For example, consider the graph of . The graph intersects the -axis at the point . If we cut the parabola in half at this point, then we get two pieces. We distinguish the two halves by coloring the left-hand side red and the right-hand side blue.   The graph of cut in half at .      To say these are mirror images of one another, means if we reflect the graph across the -axis, then we obtain the same graph just with the colors switched.   The reflection of across the -axis.      Had we not colored the two pieces, we would be unable to tell which one is which. We say the graph is invariant   Invariant  under reflection across the -axis to mean the original graph and its reflection across the -axis are the same. This observation allows us to rephrase in terms of reflections.    The function has -axis symmetry if it is invariant under reflection across the -axis.    The characterization of -axis symmetry above is purely geometric. Just like the intuitive understanding of symmetry, it can be difficult to verify whether two pictures are actually the same. Fortunately, the language of graph transformations provides us a dictionary between algebraic statements and geometric statements.    The function has -axis symmetry if for every in the domain of ,     The algebraic condition allows us to easily verify our intuition about images concretely.    Verify the function has -axis symmetry.    If we ask a utility like a graphing calculator to graph this function for us, we would see this function appears to be symmetric about the -axis.   The graph of      To verify our intuition, we just need to check Therefore has -axis symmetry.      Origin Symmetry  The second type of symmetry we consider is slightly more subtle than -axis symmetry.    We say a function is symmetric about the origin   Function  Symmetry  Origin  if the graph of is invariant under rotation by 180 degrees.    To understand this type of symmetry, consider the graph of with the origin and another marked point.   The graph of       We can see what happens as we rotate the graph around the origin in the animation below. Note the rotation does not change the shape of the graph, so the distance from the marked point to the origin stays the same.   Rotation of 180 degrees counter-clockwise    The path the marked point follows through the rotation traces out a piece of a circle. Plotting the entirety of this circle, we can see the starting and ending location of the marked point create a diameter.   The graph of with a marked point and the rotation of that point by      Assume the original point has coordinates and its rotation by has coordinates . Since the midpoint of the diameter is , we know that and . Solve the first equation for in terms of  The second coordinate is then Rewriting this in function notation, this tells us This provides us with an algebraic condition for testing origin symmetry.    The function has origin symmetry if for every in the domain of ,       Verify the function has origin symmetry.    If we ask a utility like a graphing calculator to graph this function for us, we would see this function appears to be symmetric about the origin.   The graph of      To verify our intuition, we just need to check Therefore has origin symmetry.     "
},
{
  "id": "def-y_axis_symmetry",
  "level": "2",
  "url": "sec-symmetry.html#def-y_axis_symmetry",
  "type": "Definition",
  "number": "2.4.1",
  "title": "",
  "body": "  We say a function has -axis symmetry   Function  Symmetry  -axis  if the -axis divides the graph into two pieces that are mirror images of one another.   "
},
{
  "id": "fig-halved_parabola",
  "level": "2",
  "url": "sec-symmetry.html#fig-halved_parabola",
  "type": "Figure",
  "number": "2.4.2",
  "title": "",
  "body": " The graph of cut in half at .     "
},
{
  "id": "fig-reflected_parabola",
  "level": "2",
  "url": "sec-symmetry.html#fig-reflected_parabola",
  "type": "Figure",
  "number": "2.4.3",
  "title": "",
  "body": " The reflection of across the -axis.     "
},
{
  "id": "subsec-y_axis_symmetry-8",
  "level": "2",
  "url": "sec-symmetry.html#subsec-y_axis_symmetry-8",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "invariant "
},
{
  "id": "subsec-y_axis_symmetry-9",
  "level": "2",
  "url": "sec-symmetry.html#subsec-y_axis_symmetry-9",
  "type": "Theorem",
  "number": "2.4.4",
  "title": "",
  "body": "  The function has -axis symmetry if it is invariant under reflection across the -axis.   "
},
{
  "id": "subsec-y_axis_symmetry-11",
  "level": "2",
  "url": "sec-symmetry.html#subsec-y_axis_symmetry-11",
  "type": "Theorem",
  "number": "2.4.5",
  "title": "",
  "body": "  The function has -axis symmetry if for every in the domain of ,    "
},
{
  "id": "subsec-y_axis_symmetry-13",
  "level": "2",
  "url": "sec-symmetry.html#subsec-y_axis_symmetry-13",
  "type": "Example",
  "number": "2.4.6",
  "title": "",
  "body": "  Verify the function has -axis symmetry.    If we ask a utility like a graphing calculator to graph this function for us, we would see this function appears to be symmetric about the -axis.   The graph of      To verify our intuition, we just need to check Therefore has -axis symmetry.   "
},
{
  "id": "sec-symmetry-4-3",
  "level": "2",
  "url": "sec-symmetry.html#sec-symmetry-4-3",
  "type": "Definition",
  "number": "2.4.8",
  "title": "",
  "body": "  We say a function is symmetric about the origin   Function  Symmetry  Origin  if the graph of is invariant under rotation by 180 degrees.   "
},
{
  "id": "fig-example_odd",
  "level": "2",
  "url": "sec-symmetry.html#fig-example_odd",
  "type": "Figure",
  "number": "2.4.9",
  "title": "",
  "body": " The graph of     "
},
{
  "id": "fig-rotation_cubic_animation",
  "level": "2",
  "url": "sec-symmetry.html#fig-rotation_cubic_animation",
  "type": "Figure",
  "number": "2.4.10",
  "title": "",
  "body": " Rotation of 180 degrees counter-clockwise   "
},
{
  "id": "fig-rotation_cubic",
  "level": "2",
  "url": "sec-symmetry.html#fig-rotation_cubic",
  "type": "Figure",
  "number": "2.4.11",
  "title": "",
  "body": " The graph of with a marked point and the rotation of that point by     "
},
{
  "id": "sec-symmetry-4-11",
  "level": "2",
  "url": "sec-symmetry.html#sec-symmetry-4-11",
  "type": "Theorem",
  "number": "2.4.12",
  "title": "",
  "body": "  The function has origin symmetry if for every in the domain of ,    "
},
{
  "id": "sec-symmetry-4-12",
  "level": "2",
  "url": "sec-symmetry.html#sec-symmetry-4-12",
  "type": "Example",
  "number": "2.4.13",
  "title": "",
  "body": "  Verify the function has origin symmetry.    If we ask a utility like a graphing calculator to graph this function for us, we would see this function appears to be symmetric about the origin.   The graph of      To verify our intuition, we just need to check Therefore has origin symmetry.   "
},
{
  "id": "sec-polynomial_functions",
  "level": "1",
  "url": "sec-polynomial_functions.html",
  "type": "Section",
  "number": "3.1",
  "title": "Polynomial Functions",
  "body": " Polynomial Functions   The simplest algebraic functions are constructed using the operations of addition and multiplication with a variable. While simple to construct, it is often difficult or even impossible to answer basic questions about these functions in general. However, these functions are extraordinarily important in nearly every branch of mathematics. We discuss foundational results about general polynomials in this section, and specialize to some easy to classify cases in the later sections.    Roots of Polynomials   Polynomial Function   A polynomial function   Function  Polynomial  in the variable is a function of the form where is an integer, are numbers and .  We say is a polynomial of degree   Function  Polynomial  Degree   and write .     Degree of a polynomial  The numbers are called the coefficient   Function  Polynomial  Coefficient  of , respectively.    Polynomial functions are most interesting because they are relatively simple functions that allow us to model real world phenomena.   Assume an object is thrown straight up in the air. If we let denote the distance from the thrower's hand to the ground when the object is released, and let denote the velocity of the object in meters\/second as it leaves the thrower's hand, then the height of the object as a function of time can be expressed using the polynomial     How long will it take for the object to return to the hand of the thrower?   To answer this question, we want the solutions to the equation If we subtract from both sides of the equation, then it is equivalent to find solutions to the polynomial equation Questions of this type arise frequently when discussing polynomials.   Root   A root   Function  Polynomial  Root  of the polynomial is a number, , such that     Questions about roots of polynomials have been posed and studied for millenia. The most important result about roots of polynomials is the following.   The Fundamental Theorem of Algebra  Carl Friedrich Gauss   Given a polynomial of degree , there exist a constant and roots such that We call this expression the factorization   Function  Polynomial  Factorization  of the polynomial .         Up to the constant , the factorization in is unique.    The roots of the polynomial are and . Use this information to factor .    Knowing the two roots of provides the factorization However, it is more convenient to distribute the to the term and write Even though these factorizations are not strictly identical, we consider these factorizations to be equivalent since they both convey that the roots of the polynomial are and .    Another important observation is the roots in the list may not necessarily be distinct.    Assume is a polynomial of degree and is a root of . The multiplicity of , is the number of times of times appears in the factorization of .      Write down the roots of the polynomial . For each root, determine its multiplicity.    The polynomial has roots , , and . We say the root has multiplicity and the root has multiplicity . This allows us to say that the polynomial has three roots counting multiplicity.    Finally, we note the roots of a polynomial may not always be real numbers. For example, the polynomial does not have any real roots because every real number, , satisfies and thus        The imaginary unit     The Imaginary Unit The imaginary unit , , is defined to be one of the roots of the polynomial . In particular, or, equivalently, . It is common to write .    Since the roots and provide the factorization Numbers that involve arise frequently in the study of roots of polynomials of degree 2.   Complex Number   A complex number has the form , where and are real numbers. The set of all complex numbers is      The set of complex numbers       The number is a complex number.   It is important to note tells us that every polynomial of degree has precisely roots (counting multiplicities), some of which may not be real numbers. However, it does not tell us how to find those roots.   Is there a formula to find all of the roots of the polynomial in terms of the coefficients?   In general, the answer to this question is deeply unsatisfying. We will find formulas for roots of polynomials of degree 1 in and of degree 2 in . While formulas exist for roots of polynomials of degree and degree , they are beyond the scope of this text. However, there are no such general formulas for polynomials of degree 5 and higher. This means we will need to develop other techniques for finding roots of polynomials. One very useful tool for finding roots of general polynomials is the rational root theorem.   The Rational Root Theorem   Assume with integers and . If and are integers and is a root of , then is a factor of and is a factor of .      Find all rational roots of .    The factors of are and ; the factors of are and . tells us there are eight possible rational roots of : We can check each of these by evaluating the function at these rational numbers. Therefore the only rational roots of the polynomial are and .     "
},
{
  "id": "sec-polynomial_functions-3-2",
  "level": "2",
  "url": "sec-polynomial_functions.html#sec-polynomial_functions-3-2",
  "type": "Definition",
  "number": "3.1.1",
  "title": "Polynomial Function.",
  "body": " Polynomial Function   A polynomial function   Function  Polynomial  in the variable is a function of the form where is an integer, are numbers and .  We say is a polynomial of degree   Function  Polynomial  Degree   and write .     Degree of a polynomial  The numbers are called the coefficient   Function  Polynomial  Coefficient  of , respectively.   "
},
{
  "id": "sec-polynomial_functions-3-4",
  "level": "2",
  "url": "sec-polynomial_functions.html#sec-polynomial_functions-3-4",
  "type": "Example",
  "number": "3.1.2",
  "title": "",
  "body": " Assume an object is thrown straight up in the air. If we let denote the distance from the thrower's hand to the ground when the object is released, and let denote the velocity of the object in meters\/second as it leaves the thrower's hand, then the height of the object as a function of time can be expressed using the polynomial   "
},
{
  "id": "sec-polynomial_functions-3-5",
  "level": "2",
  "url": "sec-polynomial_functions.html#sec-polynomial_functions-3-5",
  "type": "Question",
  "number": "3.1.3",
  "title": "",
  "body": " How long will it take for the object to return to the hand of the thrower?  "
},
{
  "id": "sec-polynomial_functions-3-7",
  "level": "2",
  "url": "sec-polynomial_functions.html#sec-polynomial_functions-3-7",
  "type": "Definition",
  "number": "3.1.4",
  "title": "Root.",
  "body": " Root   A root   Function  Polynomial  Root  of the polynomial is a number, , such that    "
},
{
  "id": "thm-fundamental_theorem",
  "level": "2",
  "url": "sec-polynomial_functions.html#thm-fundamental_theorem",
  "type": "Theorem",
  "number": "3.1.5",
  "title": "The Fundamental Theorem of Algebra.",
  "body": " The Fundamental Theorem of Algebra  Carl Friedrich Gauss   Given a polynomial of degree , there exist a constant and roots such that We call this expression the factorization   Function  Polynomial  Factorization  of the polynomial .     "
},
{
  "id": "sec-polynomial_functions-3-11",
  "level": "2",
  "url": "sec-polynomial_functions.html#sec-polynomial_functions-3-11",
  "type": "Example",
  "number": "3.1.6",
  "title": "",
  "body": "  The roots of the polynomial are and . Use this information to factor .    Knowing the two roots of provides the factorization However, it is more convenient to distribute the to the term and write Even though these factorizations are not strictly identical, we consider these factorizations to be equivalent since they both convey that the roots of the polynomial are and .   "
},
{
  "id": "sec-polynomial_functions-3-13",
  "level": "2",
  "url": "sec-polynomial_functions.html#sec-polynomial_functions-3-13",
  "type": "Definition",
  "number": "3.1.7",
  "title": "",
  "body": "  Assume is a polynomial of degree and is a root of . The multiplicity of , is the number of times of times appears in the factorization of .   "
},
{
  "id": "sec-polynomial_functions-3-14",
  "level": "2",
  "url": "sec-polynomial_functions.html#sec-polynomial_functions-3-14",
  "type": "Example",
  "number": "3.1.8",
  "title": "",
  "body": "  Write down the roots of the polynomial . For each root, determine its multiplicity.    The polynomial has roots , , and . We say the root has multiplicity and the root has multiplicity . This allows us to say that the polynomial has three roots counting multiplicity.   "
},
{
  "id": "sec-polynomial_functions-3-16",
  "level": "2",
  "url": "sec-polynomial_functions.html#sec-polynomial_functions-3-16",
  "type": "Definition",
  "number": "3.1.9",
  "title": "",
  "body": "     The imaginary unit     The Imaginary Unit The imaginary unit , , is defined to be one of the roots of the polynomial . In particular, or, equivalently, . It is common to write .   "
},
{
  "id": "def-complex_number",
  "level": "2",
  "url": "sec-polynomial_functions.html#def-complex_number",
  "type": "Definition",
  "number": "3.1.10",
  "title": "Complex Number.",
  "body": " Complex Number   A complex number has the form , where and are real numbers. The set of all complex numbers is      The set of complex numbers     "
},
{
  "id": "sec-polynomial_functions-3-19",
  "level": "2",
  "url": "sec-polynomial_functions.html#sec-polynomial_functions-3-19",
  "type": "Example",
  "number": "3.1.11",
  "title": "",
  "body": " The number is a complex number.  "
},
{
  "id": "sec-polynomial_functions-3-21",
  "level": "2",
  "url": "sec-polynomial_functions.html#sec-polynomial_functions-3-21",
  "type": "Question",
  "number": "3.1.12",
  "title": "",
  "body": " Is there a formula to find all of the roots of the polynomial in terms of the coefficients?  "
},
{
  "id": "thm-rational_root",
  "level": "2",
  "url": "sec-polynomial_functions.html#thm-rational_root",
  "type": "Theorem",
  "number": "3.1.13",
  "title": "The Rational Root Theorem.",
  "body": " The Rational Root Theorem   Assume with integers and . If and are integers and is a root of , then is a factor of and is a factor of .   "
},
{
  "id": "example-rational_root",
  "level": "2",
  "url": "sec-polynomial_functions.html#example-rational_root",
  "type": "Example",
  "number": "3.1.14",
  "title": "",
  "body": "  Find all rational roots of .    The factors of are and ; the factors of are and . tells us there are eight possible rational roots of : We can check each of these by evaluating the function at these rational numbers. Therefore the only rational roots of the polynomial are and .   "
},
{
  "id": "sec-division",
  "level": "1",
  "url": "sec-division.html",
  "type": "Section",
  "number": "3.2",
  "title": "Polynomial Division",
  "body": " Polynomial Division  Another method for finding roots that is often paired with is polynomial division. Besides finding roots, the method of polynomial division will be important in .  Recall that if we have an integer and a smaller integer, , then we can always find integers and with such that Long division provides a convenient method for finding and .   To divide by , we would perform the long division using the symbols to find .   For polynomials, the form is nearly identical, with numbers replaced by polynomials.   Polynomial Division   Assume and are polynomials with . There exist polynomials and with such that .  In analogy with the integers, we call the polynomials the dividend , the quotient , and the remainder , and we say that divided by is with remainder     Recall for integers and , we say that divides (or is a divisor of , or is a factor of ) if the remainder is zero is divided by . We use this same language for polynomials.    Assume and are polynomials. The polynomial  divides   Function  Polynomial  Divides  the polynomial if the remainder when is divided by is the zero polynomial, .    To understand how to perform division with polynomials, it is helpful to understand the division algorithm with numbers written in base . The four steps in the long division above are shorthand for the following equations. We arrive at the final answer by repeated substitution for the remainders starting with .     Long division with integers terminates because we reduce the number of digits in the remainder by at least one at each stage. Our goal will be similar for long division with polynomials, but we will reduce the degree of the remainder polynomial by at least one at every stage. The process terminates when the degree of the remainder is smaller than the degree of the divisor.  Divide the polynomial by the polynomial .    Write Starting from , substitute for the remainders Therefore divided by is with remainder .  We can also perform polynomial division using the same shorthand as we would for numbers. When performing polynomial division in this way, it is important to carefully distribute signs when subtracting.      Note that if we evaluate each of the polynomials at , then we find divided by is with remainder . Indeed, polynomial long division is a generalization of long division in base .   When paired with , polynomial long division is useful for factoring polynomials. The main tool is the following theorem.    The number is a root of the polynomial if and only if divides .      As we saw in , the polynomial has a root at and at . Use polynomial division to factor completely.    By , the polynomial divides  This allows us to write   Since and , we conclude that divides . This provides the factorization     "
},
{
  "id": "example-integer_division",
  "level": "2",
  "url": "sec-division.html#example-integer_division",
  "type": "Example",
  "number": "3.2.1",
  "title": "",
  "body": " To divide by , we would perform the long division using the symbols to find .  "
},
{
  "id": "thm-polynomial_division",
  "level": "2",
  "url": "sec-division.html#thm-polynomial_division",
  "type": "Theorem",
  "number": "3.2.2",
  "title": "Polynomial Division.",
  "body": " Polynomial Division   Assume and are polynomials with . There exist polynomials and with such that .  In analogy with the integers, we call the polynomials the dividend , the quotient , and the remainder , and we say that divided by is with remainder    "
},
{
  "id": "sec-division-8",
  "level": "2",
  "url": "sec-division.html#sec-division-8",
  "type": "Definition",
  "number": "3.2.3",
  "title": "",
  "body": "  Assume and are polynomials. The polynomial  divides   Function  Polynomial  Divides  the polynomial if the remainder when is divided by is the zero polynomial, .   "
},
{
  "id": "sec-division-10",
  "level": "2",
  "url": "sec-division.html#sec-division-10",
  "type": "Example",
  "number": "3.2.4",
  "title": "",
  "body": "  Long division with integers terminates because we reduce the number of digits in the remainder by at least one at each stage. Our goal will be similar for long division with polynomials, but we will reduce the degree of the remainder polynomial by at least one at every stage. The process terminates when the degree of the remainder is smaller than the degree of the divisor.  Divide the polynomial by the polynomial .    Write Starting from , substitute for the remainders Therefore divided by is with remainder .  We can also perform polynomial division using the same shorthand as we would for numbers. When performing polynomial division in this way, it is important to carefully distribute signs when subtracting.    "
},
{
  "id": "sec-division-11",
  "level": "2",
  "url": "sec-division.html#sec-division-11",
  "type": "Remark",
  "number": "3.2.5",
  "title": "",
  "body": " Note that if we evaluate each of the polynomials at , then we find divided by is with remainder . Indeed, polynomial long division is a generalization of long division in base .  "
},
{
  "id": "thm-root_div",
  "level": "2",
  "url": "sec-division.html#thm-root_div",
  "type": "Theorem",
  "number": "3.2.6",
  "title": "",
  "body": "  The number is a root of the polynomial if and only if divides .   "
},
{
  "id": "sec-division-14",
  "level": "2",
  "url": "sec-division.html#sec-division-14",
  "type": "Example",
  "number": "3.2.7",
  "title": "",
  "body": "  As we saw in , the polynomial has a root at and at . Use polynomial division to factor completely.    By , the polynomial divides  This allows us to write   Since and , we conclude that divides . This provides the factorization    "
},
{
  "id": "sec-linear_functions",
  "level": "1",
  "url": "sec-linear_functions.html",
  "type": "Section",
  "number": "3.3",
  "title": "Linear Functions",
  "body": " Linear Functions   In this section, we study a special kind of polynomial known as a linear function . As we will see, the name linear comes from the fact that the graph of such a function is always a line.    Linear Functions and Slope   Linear Function   A function is linear   Function  Linear  if the of is constant. That is, there exists a number such that for all numbers and  We call the number the slope   Function  Linear  Slope  of . The number is the -coordinate of the  .    In order to find the equation of a linear function, it is enough to know the slope, , and the value of the function for a single -value. The simplest point to find is the : the -coordinate is and the -coordinate is . If we write , then by  We obtain the equation for the function by solving the equation for in terms of     The Slope-Intercept Form of a Line   The slope-intercept form of a linear function   Function  Linear  Slope-Intercept Form  is where is the slope or average rate of change of .      Graphing Linear Functions  Consider a linear function with . Recall that the of an equation consists of all points that are a to the equation. The graph of a linear equation is always a line. We can graph the equation by finding any two points on the line and drawing a line through them. In general, the two points that are simplest to find are the two intercepts.  We find the by substituting for and solving the resulting equation for      The of the linear function with is the point       Find the -intercept of the linear equation .   To find the -intercept of the linear equation , we substitute for to get Therefore the -intercept of the linear equation is the point .    Graph the equation .   In we found that is the -intercept for the function . The for the function is the point . To graph the equation , we simply need to plot these two points and draw a straight line through them.   The graph of .         "
},
{
  "id": "def-linear_function",
  "level": "2",
  "url": "sec-linear_functions.html#def-linear_function",
  "type": "Definition",
  "number": "3.3.1",
  "title": "Linear Function.",
  "body": " Linear Function   A function is linear   Function  Linear  if the of is constant. That is, there exists a number such that for all numbers and  We call the number the slope   Function  Linear  Slope  of . The number is the -coordinate of the  .   "
},
{
  "id": "thm-slope_intercept",
  "level": "2",
  "url": "sec-linear_functions.html#thm-slope_intercept",
  "type": "Theorem",
  "number": "3.3.2",
  "title": "The Slope-Intercept Form of a Line.",
  "body": " The Slope-Intercept Form of a Line   The slope-intercept form of a linear function   Function  Linear  Slope-Intercept Form  is where is the slope or average rate of change of .   "
},
{
  "id": "thm-linear_x_intercept",
  "level": "2",
  "url": "sec-linear_functions.html#thm-linear_x_intercept",
  "type": "Theorem",
  "number": "3.3.3",
  "title": "",
  "body": "  The of the linear function with is the point    "
},
{
  "id": "example-x_intercept_2x_3y_6",
  "level": "2",
  "url": "sec-linear_functions.html#example-x_intercept_2x_3y_6",
  "type": "Example",
  "number": "3.3.4",
  "title": "",
  "body": "  Find the -intercept of the linear equation .   To find the -intercept of the linear equation , we substitute for to get Therefore the -intercept of the linear equation is the point .    Graph the equation .   In we found that is the -intercept for the function . The for the function is the point . To graph the equation , we simply need to plot these two points and draw a straight line through them.   The graph of .       "
},
{
  "id": "sec-lines",
  "level": "1",
  "url": "sec-lines.html",
  "type": "Section",
  "number": "3.4",
  "title": "Representations of Lines",
  "body": " Representations of Lines   In the previous section, we encountered linear functions and saw that we can express these functions in the form . When we graphed a linear function, we used two points to determine the line that represents the graph. We can reverse this process to find a linear function. The first step is to determine the slope. In doing this, we will find two other representations for lines.    The Slope of a Line through two Points   The Slope of a Line   The slope   Line  Slope  of the line through the points and is provided that . The slope measures the rate of change in with respect to , as depicted in .     The slope of the line through the points and .       In the definition of , we required that . While there is a line that passes through two distinct points with the same -coordinate, that line is a vertical line. Since a vertical line is not a function, the slope of a vertical line undefined.   Suppose we know the slope, , and a point that lines on the line. We can use the fact that is a to determine the -intercept. We substitute for and for in the and solve for :     The -intercept of the line with slope through the point is       Find the slope of the line through the points and .   The slope of the line through the points and is This says when the -coordinate increases by 1, the -coordinate decreases by 1.    Find the equation of the line through the points and .   In Part , we saw the slope of the line is . If we use the point , then we can find the -intercept by solving This tells us the equation of the line through and is .  We could also have used the point to find an equation of the line. If we use the point , then the -intercept is given by solving We can see that no matter which point we use, we obtain the same .      The Point-Slope Form of a Line  Assume we know the slope, , of a line and a point, , on the line. Suppose is any other point on the line. Since the slope of the line is constant, we can write to find the next form of a line.   The Point-Slope Form of a Line   The point-slope form of the line   Line  Point-Slope Form  through the point with slope is     This form of a line is convenient to use when we know the slope of a line and a point on the line.    Find the using the point and the slope .    Using , the equation of the line through with slope is       Find an equation for the line that passes through the points and .    We can use the to find the line between the points and . First compute the slope of the line Use either of the two points to find the equation   While these equations may look different, we can compare them by placing them in . For the first equation, add to both sides to get and for the second, add to both sides to get In this form, we can see that these equations represent the same line.      The Standard Equation of a Line  So far, we have only been interested in working with lines with a well-defined slope. Sometimes, it is convenient to work with lines that may be vertical. The standard equation of a line allows us to do just that.   Standard Equation of a Line   The standard equation of a line   Equation  Line  Standard  in the variables and is where and are not both zero.     The standard equation of a line may not always represent as a function of ! If , then the standard equation of a line reduces to which is a vertical line.     Place the linear equation into standard form .    The equation can be placed in standard form as follows      "
},
{
  "id": "def-slope",
  "level": "2",
  "url": "sec-lines.html#def-slope",
  "type": "Definition",
  "number": "3.4.1",
  "title": "The Slope of a Line.",
  "body": " The Slope of a Line   The slope   Line  Slope  of the line through the points and is provided that . The slope measures the rate of change in with respect to , as depicted in .   "
},
{
  "id": "fig-slope",
  "level": "2",
  "url": "sec-lines.html#fig-slope",
  "type": "Figure",
  "number": "3.4.2",
  "title": "",
  "body": " The slope of the line through the points and .     "
},
{
  "id": "subsec-slope_of_line_through_two_pts-4",
  "level": "2",
  "url": "sec-lines.html#subsec-slope_of_line_through_two_pts-4",
  "type": "Remark",
  "number": "3.4.3",
  "title": "",
  "body": " In the definition of , we required that . While there is a line that passes through two distinct points with the same -coordinate, that line is a vertical line. Since a vertical line is not a function, the slope of a vertical line undefined.  "
},
{
  "id": "thm-point_slope_intercept",
  "level": "2",
  "url": "sec-lines.html#thm-point_slope_intercept",
  "type": "Theorem",
  "number": "3.4.4",
  "title": "",
  "body": "  The -intercept of the line with slope through the point is    "
},
{
  "id": "example-line_through_two_points",
  "level": "2",
  "url": "sec-lines.html#example-line_through_two_points",
  "type": "Example",
  "number": "3.4.5",
  "title": "",
  "body": "  Find the slope of the line through the points and .   The slope of the line through the points and is This says when the -coordinate increases by 1, the -coordinate decreases by 1.    Find the equation of the line through the points and .   In Part , we saw the slope of the line is . If we use the point , then we can find the -intercept by solving This tells us the equation of the line through and is .  We could also have used the point to find an equation of the line. If we use the point , then the -intercept is given by solving We can see that no matter which point we use, we obtain the same .   "
},
{
  "id": "thm-point_slope",
  "level": "2",
  "url": "sec-lines.html#thm-point_slope",
  "type": "Theorem",
  "number": "3.4.6",
  "title": "The Point-Slope Form of a Line.",
  "body": " The Point-Slope Form of a Line   The point-slope form of the line   Line  Point-Slope Form  through the point with slope is    "
},
{
  "id": "subsec-point_slope-5",
  "level": "2",
  "url": "sec-lines.html#subsec-point_slope-5",
  "type": "Example",
  "number": "3.4.7",
  "title": "",
  "body": "  Find the using the point and the slope .    Using , the equation of the line through with slope is    "
},
{
  "id": "subsec-point_slope-6",
  "level": "2",
  "url": "sec-lines.html#subsec-point_slope-6",
  "type": "Example",
  "number": "3.4.8",
  "title": "",
  "body": "  Find an equation for the line that passes through the points and .    We can use the to find the line between the points and . First compute the slope of the line Use either of the two points to find the equation   While these equations may look different, we can compare them by placing them in . For the first equation, add to both sides to get and for the second, add to both sides to get In this form, we can see that these equations represent the same line.   "
},
{
  "id": "def-linear_equation",
  "level": "2",
  "url": "sec-lines.html#def-linear_equation",
  "type": "Definition",
  "number": "3.4.9",
  "title": "Standard Equation of a Line.",
  "body": " Standard Equation of a Line   The standard equation of a line   Equation  Line  Standard  in the variables and is where and are not both zero.   "
},
{
  "id": "subsec-standard_eq_line-4",
  "level": "2",
  "url": "sec-lines.html#subsec-standard_eq_line-4",
  "type": "Warning",
  "number": "3.4.10",
  "title": "",
  "body": " The standard equation of a line may not always represent as a function of ! If , then the standard equation of a line reduces to which is a vertical line.  "
},
{
  "id": "subsec-standard_eq_line-5",
  "level": "2",
  "url": "sec-lines.html#subsec-standard_eq_line-5",
  "type": "Example",
  "number": "3.4.11",
  "title": "",
  "body": "  Place the linear equation into standard form .    The equation can be placed in standard form as follows    "
},
{
  "id": "sec-perp_parallel",
  "level": "1",
  "url": "sec-perp_parallel.html",
  "type": "Section",
  "number": "3.5",
  "title": "Parallel and Perpendicular Lines",
  "body": " Parallel and Perpendicular Lines   Parallel Lines   Parallel Lines   Two lines in the Cartesian plane are said to be parallel   Line  Parallel  if they do not intersect.     Parallel lines.        Two lines are parallel if and only if they have the same slope.      Determine whether the lines are parallel.    In order to determine whether these lines are parallel, we need to find the slope of each line. We do this by placing each line into slope-intercept form .  For the first line, This tells us the slope of the line is .  For the second line, This tells us the slope of the line is also . Therefore the lines and are parallel by .      Find the equation of the line parallel to that passes through the point . Write your answer in slope-intercept form .    First, find the slope of the line by placing the equation into . In this form, we see the slope of the line is .  By , the slope of a line parallel to is . Now we use point-slope form to write down a line with slope through the point : Finally, convert to slope-intercept form        Perpendicular Lines   Perpendicular Lines   Two lines are perpendicular   Line  Perpendicular  if they intersect at a right angle.     Perpendicular lines.        Two lines are perpendicular if and only if the product of their slopes is .      Determine whether the lines are perpendicular.    First we place the lines in slope-intercept form to find the slopes. The first equation becomes In this form, we can read off the slope of the line as   The second equation becomes In this form, we can read off the slope of the line as .  Finally, to check whether these lines are parallel, we compute the product of these slopes. Since we conclude that these lines are perpendicular by .      Find the equation of a line perpendicular to that passes through the point . Write your answer in slope-intercept form .    First, place the line in slope-intercept form  We can read off the slope as from this equation.  To find the slope, , of a perpendicular line, tells us we must solve the equation for :   Using point-slope form , the equation of the line perpendicular to that passes through the point is Finally, we convert to slope-intercept form       "
},
{
  "id": "def-parallel",
  "level": "2",
  "url": "sec-perp_parallel.html#def-parallel",
  "type": "Definition",
  "number": "3.5.1",
  "title": "Parallel Lines.",
  "body": " Parallel Lines   Two lines in the Cartesian plane are said to be parallel   Line  Parallel  if they do not intersect.   "
},
{
  "id": "fig-parallel_lines",
  "level": "2",
  "url": "sec-perp_parallel.html#fig-parallel_lines",
  "type": "Figure",
  "number": "3.5.2",
  "title": "",
  "body": " Parallel lines.     "
},
{
  "id": "thm-parallel",
  "level": "2",
  "url": "sec-perp_parallel.html#thm-parallel",
  "type": "Theorem",
  "number": "3.5.3",
  "title": "",
  "body": "  Two lines are parallel if and only if they have the same slope.   "
},
{
  "id": "subsec-parallel-5",
  "level": "2",
  "url": "sec-perp_parallel.html#subsec-parallel-5",
  "type": "Example",
  "number": "3.5.4",
  "title": "",
  "body": "  Determine whether the lines are parallel.    In order to determine whether these lines are parallel, we need to find the slope of each line. We do this by placing each line into slope-intercept form .  For the first line, This tells us the slope of the line is .  For the second line, This tells us the slope of the line is also . Therefore the lines and are parallel by .   "
},
{
  "id": "subsec-parallel-6",
  "level": "2",
  "url": "sec-perp_parallel.html#subsec-parallel-6",
  "type": "Example",
  "number": "3.5.5",
  "title": "",
  "body": "  Find the equation of the line parallel to that passes through the point . Write your answer in slope-intercept form .    First, find the slope of the line by placing the equation into . In this form, we see the slope of the line is .  By , the slope of a line parallel to is . Now we use point-slope form to write down a line with slope through the point : Finally, convert to slope-intercept form     "
},
{
  "id": "def-perpendicular",
  "level": "2",
  "url": "sec-perp_parallel.html#def-perpendicular",
  "type": "Definition",
  "number": "3.5.6",
  "title": "Perpendicular Lines.",
  "body": " Perpendicular Lines   Two lines are perpendicular   Line  Perpendicular  if they intersect at a right angle.   "
},
{
  "id": "fig-perpendicular_lines",
  "level": "2",
  "url": "sec-perp_parallel.html#fig-perpendicular_lines",
  "type": "Figure",
  "number": "3.5.7",
  "title": "",
  "body": " Perpendicular lines.     "
},
{
  "id": "thm-perpendicular",
  "level": "2",
  "url": "sec-perp_parallel.html#thm-perpendicular",
  "type": "Theorem",
  "number": "3.5.8",
  "title": "",
  "body": "  Two lines are perpendicular if and only if the product of their slopes is .   "
},
{
  "id": "subsec-perpendicular-5",
  "level": "2",
  "url": "sec-perp_parallel.html#subsec-perpendicular-5",
  "type": "Example",
  "number": "3.5.9",
  "title": "",
  "body": "  Determine whether the lines are perpendicular.    First we place the lines in slope-intercept form to find the slopes. The first equation becomes In this form, we can read off the slope of the line as   The second equation becomes In this form, we can read off the slope of the line as .  Finally, to check whether these lines are parallel, we compute the product of these slopes. Since we conclude that these lines are perpendicular by .   "
},
{
  "id": "subsec-perpendicular-6",
  "level": "2",
  "url": "sec-perp_parallel.html#subsec-perpendicular-6",
  "type": "Example",
  "number": "3.5.10",
  "title": "",
  "body": "  Find the equation of a line perpendicular to that passes through the point . Write your answer in slope-intercept form .    First, place the line in slope-intercept form  We can read off the slope as from this equation.  To find the slope, , of a perpendicular line, tells us we must solve the equation for :   Using point-slope form , the equation of the line perpendicular to that passes through the point is Finally, we convert to slope-intercept form     "
},
{
  "id": "sec-linear_ineq",
  "level": "1",
  "url": "sec-linear_ineq.html",
  "type": "Section",
  "number": "3.6",
  "title": "Linear and Absolute Value Inequalities",
  "body": " Linear and Absolute Value Inequalities   Linear Inequalities   Linear Inequality   A linear inequality   Inequality  Linear  in the variables and is an expression that can be placed in one of the following forms  ,  ,  , or  .       Solution to an Inequality   A solution   Inequality  Linear  Solution  to an inequality in the variables and is an ordered pair that make the equation true when  the first coordinate, , is substituted into the inequality for , and  the second coordinate, , is substituted into the inequality for .       Graph of an Inequality   The graph   Inequality  Linear  Graph  of an inequality in the variables and consists of all the points in the plane that are solutions to the inequality.      Graph the linear inequality     The graph of consists of all the points that are below the line .  We use a dashed line to indicate the points on the line are not a solution to the inequality and shade the portion of the plane beneath the line to indicate those points are solutions to the inequality.   The graph of the linear inequality .          Graph the linear inequality     The graph of consists of all the points that are on or below the line .  We use a solid line to indicate the points on the line are a solution to the linear inequality and shade the portion of the plane beneath the line to indicate that those points are also solutions.   The graph of the linear inequality .          Graph the linear inequality     The graph of consists of all the points that are above the line .  We use a dashed line to indicate the points on the line are not solutions to the inequality and shade the portion of the plane above the line to indicate that those points are solutions.   The graph of the linear inequality .          Graph the linear inequality     The graph of consists of all the points that are either on or above the line .  We use a solid line to indicate the points on the line are solutions to the linear inequality and shade the portion of the plane above the line to indicate that those points are also solutions.   The graph of the linear inequality .          Absolute Value and Inequality   Linear Absolute Value Inequality   A linear absolute value inequality   Inequality  Linear  Absolute Value  in the variables and is an expression that can be placed in one of the following forms   ,   ,   , or   .      Recall from , for any number , measures the distance between and the origin on the number line. We can see from that and are the same distance from the origin.   The distance between and the origin, and between and the origin.      This observation tells us for an linear absolute value inequality of the form , we are looking for the points in the plane such that the number is less than units away from 0 on the number line. From we can see these are the solutions to both  If we rewrite these as the linear inequalities then we can see the solutions to are the points that are above the line and below the line . Similarly, the solutions to are the points that are either on or between the lines and below the line .  For an linear absolute value inequality of the form , the observation above tells us we are looking for the points in the plane such that the number is more than units away from 0 on the number line. From we can see these are solutions to either  If we rewrite these as the liner inequalities then we can see the solutions to are the points that are below the line or above the line . Similarly, the solutions to the linear absolute value inequality are the points that are either on or below the line or on or above the line .    Graph the linear absolute value inequality .    The solutions to the inequality are the points that are solutions to both of the linear inequalities This means the graph is the overlap between and . That is, the points that are between the lines    The graph of the linear absolute value inequality .          Graph the linear absolute value inequality .    The solutions to the inequality are the points that are solutions to both of the linear inequalities This means the graph is the overlap between and . That is, the points that are either on or between the lines    The graph of the linear absolute value inequality .          Graph the linear absolute value inequality .    The solutions to the inequality are the points that are solutions to either  This means the graph is the combination of the graphs for the linear inequalities That is, the points that are either above the line or below the line .   The graph of the linear absolute value inequality .          Graph the linear absolute value inequality .    The solutions to the inequality are the points that are solutions to either the linear inequality or the linear inequality This means the graph is the combination of the graphs for the linear inequalities That is, the points that are either on or above the line , or on or below the line .   The graph of the linear absolute value inequality .         "
},
{
  "id": "def-linear_inequality",
  "level": "2",
  "url": "sec-linear_ineq.html#def-linear_inequality",
  "type": "Definition",
  "number": "3.6.1",
  "title": "Linear Inequality.",
  "body": " Linear Inequality   A linear inequality   Inequality  Linear  in the variables and is an expression that can be placed in one of the following forms  ,  ,  , or  .     "
},
{
  "id": "def-solution_inequality",
  "level": "2",
  "url": "sec-linear_ineq.html#def-solution_inequality",
  "type": "Definition",
  "number": "3.6.2",
  "title": "Solution to an Inequality.",
  "body": " Solution to an Inequality   A solution   Inequality  Linear  Solution  to an inequality in the variables and is an ordered pair that make the equation true when  the first coordinate, , is substituted into the inequality for , and  the second coordinate, , is substituted into the inequality for .     "
},
{
  "id": "def-graph_inequality",
  "level": "2",
  "url": "sec-linear_ineq.html#def-graph_inequality",
  "type": "Definition",
  "number": "3.6.3",
  "title": "Graph of an Inequality.",
  "body": " Graph of an Inequality   The graph   Inequality  Linear  Graph  of an inequality in the variables and consists of all the points in the plane that are solutions to the inequality.   "
},
{
  "id": "subsec-linear_inequalities-5",
  "level": "2",
  "url": "sec-linear_ineq.html#subsec-linear_inequalities-5",
  "type": "Example",
  "number": "3.6.4",
  "title": "",
  "body": "  Graph the linear inequality     The graph of consists of all the points that are below the line .  We use a dashed line to indicate the points on the line are not a solution to the inequality and shade the portion of the plane beneath the line to indicate those points are solutions to the inequality.   The graph of the linear inequality .       "
},
{
  "id": "subsec-linear_inequalities-6",
  "level": "2",
  "url": "sec-linear_ineq.html#subsec-linear_inequalities-6",
  "type": "Example",
  "number": "3.6.6",
  "title": "",
  "body": "  Graph the linear inequality     The graph of consists of all the points that are on or below the line .  We use a solid line to indicate the points on the line are a solution to the linear inequality and shade the portion of the plane beneath the line to indicate that those points are also solutions.   The graph of the linear inequality .       "
},
{
  "id": "subsec-linear_inequalities-7",
  "level": "2",
  "url": "sec-linear_ineq.html#subsec-linear_inequalities-7",
  "type": "Example",
  "number": "3.6.8",
  "title": "",
  "body": "  Graph the linear inequality     The graph of consists of all the points that are above the line .  We use a dashed line to indicate the points on the line are not solutions to the inequality and shade the portion of the plane above the line to indicate that those points are solutions.   The graph of the linear inequality .       "
},
{
  "id": "subsec-linear_inequalities-8",
  "level": "2",
  "url": "sec-linear_ineq.html#subsec-linear_inequalities-8",
  "type": "Example",
  "number": "3.6.10",
  "title": "",
  "body": "  Graph the linear inequality     The graph of consists of all the points that are either on or above the line .  We use a solid line to indicate the points on the line are solutions to the linear inequality and shade the portion of the plane above the line to indicate that those points are also solutions.   The graph of the linear inequality .       "
},
{
  "id": "def-linear_absolute_value_inequality",
  "level": "2",
  "url": "sec-linear_ineq.html#def-linear_absolute_value_inequality",
  "type": "Definition",
  "number": "3.6.12",
  "title": "Linear Absolute Value Inequality.",
  "body": " Linear Absolute Value Inequality   A linear absolute value inequality   Inequality  Linear  Absolute Value  in the variables and is an expression that can be placed in one of the following forms   ,   ,   , or   .     "
},
{
  "id": "fig-abs_val_two_sol",
  "level": "2",
  "url": "sec-linear_ineq.html#fig-abs_val_two_sol",
  "type": "Figure",
  "number": "3.6.13",
  "title": "",
  "body": " The distance between and the origin, and between and the origin.     "
},
{
  "id": "sec-linear_ineq-3-7",
  "level": "2",
  "url": "sec-linear_ineq.html#sec-linear_ineq-3-7",
  "type": "Example",
  "number": "3.6.14",
  "title": "",
  "body": "  Graph the linear absolute value inequality .    The solutions to the inequality are the points that are solutions to both of the linear inequalities This means the graph is the overlap between and . That is, the points that are between the lines    The graph of the linear absolute value inequality .       "
},
{
  "id": "sec-linear_ineq-3-8",
  "level": "2",
  "url": "sec-linear_ineq.html#sec-linear_ineq-3-8",
  "type": "Example",
  "number": "3.6.16",
  "title": "",
  "body": "  Graph the linear absolute value inequality .    The solutions to the inequality are the points that are solutions to both of the linear inequalities This means the graph is the overlap between and . That is, the points that are either on or between the lines    The graph of the linear absolute value inequality .       "
},
{
  "id": "sec-linear_ineq-3-9",
  "level": "2",
  "url": "sec-linear_ineq.html#sec-linear_ineq-3-9",
  "type": "Example",
  "number": "3.6.18",
  "title": "",
  "body": "  Graph the linear absolute value inequality .    The solutions to the inequality are the points that are solutions to either  This means the graph is the combination of the graphs for the linear inequalities That is, the points that are either above the line or below the line .   The graph of the linear absolute value inequality .       "
},
{
  "id": "sec-linear_ineq-3-10",
  "level": "2",
  "url": "sec-linear_ineq.html#sec-linear_ineq-3-10",
  "type": "Example",
  "number": "3.6.20",
  "title": "",
  "body": "  Graph the linear absolute value inequality .    The solutions to the inequality are the points that are solutions to either the linear inequality or the linear inequality This means the graph is the combination of the graphs for the linear inequalities That is, the points that are either on or above the line , or on or below the line .   The graph of the linear absolute value inequality .       "
},
{
  "id": "sec-quadratic_functions",
  "level": "1",
  "url": "sec-quadratic_functions.html",
  "type": "Section",
  "number": "3.7",
  "title": "Quadratic Functions",
  "body": " Quadratic Functions   In this section, we study polynomial functions of degree 2. These polynomial functions are often called quadratic functions .    Vertex Form   Quadratic Function   A function is quadratic   Function  Quadratic  if it has the form where , , and are numbers, and .    Just as with lines, quadratic functions are easier to understand through visualizations. The simplest quadratic function to understand is . We call the graph of a parabola .  Graph  Parabola  The point is called the vertex .  Graph  Parabola  Vertex    As we have already seen in , the graph of this function is symmetric about the -axis, which is the vertical line through the vertex. While general quadratics are slightly more complicated, we can use the properties of to graph the class of quadratics in the following form.   The Vertex Form of a Quadratic   A quadratic function, , is in vertex form   Function  Quadratic  Vertex Form  if there are numbers and such that     Using the methods of , we can graph quadratics in this form by following the steps below.   Graphing Quadratic Functions in Vertex Form   To graph of the quadratic function    Translate the graph of horizontally by units.   If , then the translation is to the right.    If , then the translation is to the left.       Scale the graph of by .   If , then the graph is stretched.    If , then the graph is compressed.       If , reflect the graph of over the -axis.    Translate the graph of vertically by units.   If , then the translation is down.    If , then the translation is up.            Graph the function .    Following , we perform the following operations on the graph of the function .  Translate the graph of to the left by 1 to obtain the graph of .  Stretch the graph of by a factor of 2 to obtain the graph of .  Reflect the graph of across the -axis to obtain the graph of .  Translate the graph of up by 1 to obtain the graph of .    These operations are shown below.   The transformations used to graph .     Translate the graph of to the left by       Stretch the graph of by a factor of         Reflect the graph of across the -axis       Translate the graph of up by           If we follow the vertex, we can see the first operation moves the point to . Since the point lies on the -axis, the second and third operation do not move the point . The fourth operation moves the point to the point . Since these operations preserve the general shape of the graph, a quadratic function in the form is a parabola with vertex at . Hence the reason for the name vertex form .  Similarly, if we follow the line of symmetry for , then we can see the first operation moves the vertical line to the vertical line . The following three operations do not change the vertical line, so the graph of is symmetric about the vertical line .  Finally, we observe the third operation may change the direction in which the parabola opens.    The graph of a parabola is    concave up   Function  Quadratic  Concave Up  if the parabola opens upwards like .     concave down   Function  Quadratic  Concave Down  if the parabola opens downwards like .       For quadratics in vertex form , we can see that is concave up whenever and concave down whenever .    Completing the Square  Surprisingly, every quadratic function can be placed into vertex form. Paired with the observations above, this tells us the graph of every quadratic function is a parabola. Placing a general quadratic function into vertex form will require the method of completing the square.  Remember that when we multiply two binomials, we must distribute. We can remember how to distribute using the mnemonic FOIL: F irst, O uter, I nner, L ast:   Multiplying binomials using the FOIL method.    If we use this method to multiply a binomial by itself, then we find the useful formula We call a quadratic function of the form a perfect square .  Perfect Square    Given a quadratic equation , we can use the formula to complete the square   Complete the Square  as follows.   Completing the Square   To complete the square with the quadratic function   Factor an from the first two terms to get   Add and subtract inside the parentheses to get   Factor the first three terms inside the parentheses as a perfect square   Distribute the through the sum            The number is the -coordinate of the vertex, and the number is the -coordinate of the vertex.   The Vertex Formula   Let be a quadratic function. The -coordinate of the vertex is and the -coordinate of the vertex is   As an ordered pair, the vertex of the graph of occurs at      Using , the vertex form of the quadratic function is      Find the vertex form of the quadratic function .    The -coordinate of the vertex is and the -coordinate of the vertex is Therefore the vertex form of the quadratic function       Find the vertex of the quadratic function .    The -coordinate of the vertex is and the -coordinate of the vertex is Therefore the vertex form of the quadratic function is       Applications to Circles  In we only encountered circles in standard form. However, circles will not always be presented this way. We study how the can help us to identify the equation of a circle, even if it is not presented in standard form.  Consider the equation We can view and as quadratic functions in the variables and , respectively. The first coordinate of the vertex of is and the second coordinate of the vertex as . This allows us to write   Similarly, the first coordinate for the vertex of is the second coordinate of the vertex of is and so   These two observations allow us to rewrite the original equation Therefore the equation represents the circle of radius centered at the point .   "
},
{
  "id": "def-quadratic_function",
  "level": "2",
  "url": "sec-quadratic_functions.html#def-quadratic_function",
  "type": "Definition",
  "number": "3.7.1",
  "title": "Quadratic Function.",
  "body": " Quadratic Function   A function is quadratic   Function  Quadratic  if it has the form where , , and are numbers, and .   "
},
{
  "id": "sec-quadratic_functions-3-3",
  "level": "2",
  "url": "sec-quadratic_functions.html#sec-quadratic_functions-3-3",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "parabola vertex "
},
{
  "id": "def-vertex_form",
  "level": "2",
  "url": "sec-quadratic_functions.html#def-vertex_form",
  "type": "Definition",
  "number": "3.7.2",
  "title": "The Vertex Form of a Quadratic.",
  "body": " The Vertex Form of a Quadratic   A quadratic function, , is in vertex form   Function  Quadratic  Vertex Form  if there are numbers and such that    "
},
{
  "id": "algo-graphing_quadratics",
  "level": "2",
  "url": "sec-quadratic_functions.html#algo-graphing_quadratics",
  "type": "Algorithm",
  "number": "3.7.3",
  "title": "Graphing Quadratic Functions in Vertex Form.",
  "body": " Graphing Quadratic Functions in Vertex Form   To graph of the quadratic function    Translate the graph of horizontally by units.   If , then the translation is to the right.    If , then the translation is to the left.       Scale the graph of by .   If , then the graph is stretched.    If , then the graph is compressed.       If , reflect the graph of over the -axis.    Translate the graph of vertically by units.   If , then the translation is down.    If , then the translation is up.         "
},
{
  "id": "sec-quadratic_functions-3-8",
  "level": "2",
  "url": "sec-quadratic_functions.html#sec-quadratic_functions-3-8",
  "type": "Example",
  "number": "3.7.4",
  "title": "",
  "body": "  Graph the function .    Following , we perform the following operations on the graph of the function .  Translate the graph of to the left by 1 to obtain the graph of .  Stretch the graph of by a factor of 2 to obtain the graph of .  Reflect the graph of across the -axis to obtain the graph of .  Translate the graph of up by 1 to obtain the graph of .    These operations are shown below.   The transformations used to graph .     Translate the graph of to the left by       Stretch the graph of by a factor of         Reflect the graph of across the -axis       Translate the graph of up by          "
},
{
  "id": "def-concavity",
  "level": "2",
  "url": "sec-quadratic_functions.html#def-concavity",
  "type": "Definition",
  "number": "3.7.6",
  "title": "",
  "body": "  The graph of a parabola is    concave up   Function  Quadratic  Concave Up  if the parabola opens upwards like .     concave down   Function  Quadratic  Concave Down  if the parabola opens downwards like .      "
},
{
  "id": "fig-FOIL",
  "level": "2",
  "url": "sec-quadratic_functions.html#fig-FOIL",
  "type": "Figure",
  "number": "3.7.7",
  "title": "",
  "body": " Multiplying binomials using the FOIL method.   "
},
{
  "id": "subsec-completing_the_square-5",
  "level": "2",
  "url": "sec-quadratic_functions.html#subsec-completing_the_square-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "perfect square "
},
{
  "id": "subsec-completing_the_square-6",
  "level": "2",
  "url": "sec-quadratic_functions.html#subsec-completing_the_square-6",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "complete the square "
},
{
  "id": "alg-completing_the_square",
  "level": "2",
  "url": "sec-quadratic_functions.html#alg-completing_the_square",
  "type": "Algorithm",
  "number": "3.7.8",
  "title": "Completing the Square.",
  "body": " Completing the Square   To complete the square with the quadratic function   Factor an from the first two terms to get   Add and subtract inside the parentheses to get   Factor the first three terms inside the parentheses as a perfect square   Distribute the through the sum      "
},
{
  "id": "vertex_formula",
  "level": "2",
  "url": "sec-quadratic_functions.html#vertex_formula",
  "type": "Formula",
  "number": "3.7.9",
  "title": "The Vertex Formula.",
  "body": " The Vertex Formula   Let be a quadratic function. The -coordinate of the vertex is and the -coordinate of the vertex is   As an ordered pair, the vertex of the graph of occurs at    "
},
{
  "id": "subsec-completing_the_square-10",
  "level": "2",
  "url": "sec-quadratic_functions.html#subsec-completing_the_square-10",
  "type": "Remark",
  "number": "3.7.10",
  "title": "",
  "body": " Using , the vertex form of the quadratic function is   "
},
{
  "id": "subsec-completing_the_square-11",
  "level": "2",
  "url": "sec-quadratic_functions.html#subsec-completing_the_square-11",
  "type": "Example",
  "number": "3.7.11",
  "title": "",
  "body": "  Find the vertex form of the quadratic function .    The -coordinate of the vertex is and the -coordinate of the vertex is Therefore the vertex form of the quadratic function    "
},
{
  "id": "subsec-completing_the_square-12",
  "level": "2",
  "url": "sec-quadratic_functions.html#subsec-completing_the_square-12",
  "type": "Example",
  "number": "3.7.12",
  "title": "",
  "body": "  Find the vertex of the quadratic function .    The -coordinate of the vertex is and the -coordinate of the vertex is Therefore the vertex form of the quadratic function is    "
},
{
  "id": "sec-roots_quadratics",
  "level": "1",
  "url": "sec-roots_quadratics.html",
  "type": "Section",
  "number": "3.8",
  "title": "Roots of Quadratic Functions",
  "body": " Roots of Quadratic Functions   The Quadratic Formula  In order to accurately graph a quadratic function , it is necessary to identify the -intercepts for the function. A point in the Cartesian plane is an for this function if This reduces the geometric problem of finding the -intercepts of a quadratic to the algebraic problem finding solutions to equations.    An equation of the form is called a quadratic equation   Equation  Quadratic      To find the solutions to the quadratic equation , we use to write and solve this equation for    It is important to note that are real numbers only when is a non-negative number. The number is an important invariant of a quadratic function.   The Discriminant   The discriminant   Function  Quadratic  Discriminant  of the quadratic function is the number     The discriminant provides both algebraic and geometric information about quadratic functions. On the algebraic side, the discriminant tells us how many solutions there are to the quadratic equation .   The Quadratic Formula   The quadratic equation has either two, one, or zero real solutions, depending on , .   If , then the two solutions are    If , then the only solution is   If , then there are no real solutions.      If we pair with , then we have an algorithmic way to factor any quadratic function.    The quadratic function factors as where is the .                                Factor the quadratic .    The discriminant is so the roots are By , the factorization is We can check our answer by using FOIL to see     On the geometric side, the discriminant tells us how many -intercepts the graph of has.   The -intercepts of a Quadratic Function   The quadratic function has either two, one, or zero -intercepts, depending on the , .   If , then there are two -intercepts,    If , then there is one -intercept Note this is the vertex.  If , then there are no -intercepts.        Find the -intercepts of the function .    Since the discriminant is this function does not have any -intercepts.      Find the -intercepts of the function .    The discriminant of this quadratic is The solutions to the equation are given by the formula This tells us that one intercept occurs when and the other occurs when Therefore the -intercepts are       Graphing Qudaratics  We can simplify the process of graphing a quadratic function by using the tools we have developed in this section.   Graphing a Quadratic Function      Use the to find the vertex, , of the parabola. Plot the vertex in the plane.    Factor or use the to find the -intercept(s). If there are -intercepts, plot them in the plane.    Plot the -intercept, , in the plane.    Draw a parabola through the points in Steps (1) through (3).  The parabola will open upwards if .  The parabola will open downwards if .          "
},
{
  "id": "sec-roots_quadratics-2-3",
  "level": "2",
  "url": "sec-roots_quadratics.html#sec-roots_quadratics-2-3",
  "type": "Definition",
  "number": "3.8.1",
  "title": "",
  "body": "  An equation of the form is called a quadratic equation   Equation  Quadratic     "
},
{
  "id": "def-discriminant",
  "level": "2",
  "url": "sec-roots_quadratics.html#def-discriminant",
  "type": "Definition",
  "number": "3.8.2",
  "title": "The Discriminant.",
  "body": " The Discriminant   The discriminant   Function  Quadratic  Discriminant  of the quadratic function is the number    "
},
{
  "id": "quadratic_formula",
  "level": "2",
  "url": "sec-roots_quadratics.html#quadratic_formula",
  "type": "Formula",
  "number": "3.8.3",
  "title": "The Quadratic Formula.",
  "body": " The Quadratic Formula   The quadratic equation has either two, one, or zero real solutions, depending on , .   If , then the two solutions are    If , then the only solution is   If , then there are no real solutions.     "
},
{
  "id": "thm-quadratic_factorization",
  "level": "2",
  "url": "sec-roots_quadratics.html#thm-quadratic_factorization",
  "type": "Theorem",
  "number": "3.8.4",
  "title": "",
  "body": "  The quadratic function factors as where is the .   "
},
{
  "id": "sec-roots_quadratics-2-11",
  "level": "2",
  "url": "sec-roots_quadratics.html#sec-roots_quadratics-2-11",
  "type": "Example",
  "number": "3.8.5",
  "title": "",
  "body": "  Factor the quadratic .    The discriminant is so the roots are By , the factorization is We can check our answer by using FOIL to see    "
},
{
  "id": "sec-roots_quadratics-2-13",
  "level": "2",
  "url": "sec-roots_quadratics.html#sec-roots_quadratics-2-13",
  "type": "Theorem",
  "number": "3.8.6",
  "title": "The <span class=\"process-math\">\\(x\\)<\/span>-intercepts of a Quadratic Function.",
  "body": " The -intercepts of a Quadratic Function   The quadratic function has either two, one, or zero -intercepts, depending on the , .   If , then there are two -intercepts,    If , then there is one -intercept Note this is the vertex.  If , then there are no -intercepts.     "
},
{
  "id": "sec-roots_quadratics-2-14",
  "level": "2",
  "url": "sec-roots_quadratics.html#sec-roots_quadratics-2-14",
  "type": "Example",
  "number": "3.8.7",
  "title": "",
  "body": "  Find the -intercepts of the function .    Since the discriminant is this function does not have any -intercepts.   "
},
{
  "id": "sec-roots_quadratics-2-15",
  "level": "2",
  "url": "sec-roots_quadratics.html#sec-roots_quadratics-2-15",
  "type": "Example",
  "number": "3.8.8",
  "title": "",
  "body": "  Find the -intercepts of the function .    The discriminant of this quadratic is The solutions to the equation are given by the formula This tells us that one intercept occurs when and the other occurs when Therefore the -intercepts are    "
},
{
  "id": "sec-roots_quadratics-3-3",
  "level": "2",
  "url": "sec-roots_quadratics.html#sec-roots_quadratics-3-3",
  "type": "Algorithm",
  "number": "3.8.9",
  "title": "Graphing a Quadratic Function.",
  "body": " Graphing a Quadratic Function      Use the to find the vertex, , of the parabola. Plot the vertex in the plane.    Factor or use the to find the -intercept(s). If there are -intercepts, plot them in the plane.    Plot the -intercept, , in the plane.    Draw a parabola through the points in Steps (1) through (3).  The parabola will open upwards if .  The parabola will open downwards if .        "
},
{
  "id": "sec-inequalities",
  "level": "1",
  "url": "sec-inequalities.html",
  "type": "Section",
  "number": "3.9",
  "title": "Polynomial Inequalities",
  "body": " Polynomial Inequalities   We have focused primarily on solving equations of the form where is a polynomial function in the variable . We now turn to polynomial inequalities   Inequality  Polynomial  which are relations of the form    ,     ,     , or            Solutions to Inequalities  First we start with what it means to be a solution to an inequality.   Solution to a Polynomial Inequality   A solution   Inequality  Solution  to an inequality in the variable is a number that makes the expression true when is substituted for .    We can interpret this definition graphically as saying   The solutions to are the -values where the graph of is below the -axis    The solutions to are the -values where the graph of is on or below the -axis    The solutions to are the -values where the graph of is above the -axis    The solutions to are the -values where the graph of is on or above the -axis   This tells us precisely how to solve a polynomial inequality using the roots.    Solving Polynomial Inequalities Algebraically  The first method is purely algebraic. It is useful when you are unable to sketch the graph of the polynomial.   Solving Polynomial Inequalities Algebraically   To find the solutions to a polynomial inequality involving the polynomial    Find the distinct real roots of and write them in order from smallest to largest     Find numbers such that     Evaluate at each .   If the inequality is satisfied for , then the inequality holds on the interval . Otherwise, the inequality does not hold on the interval .    If the inequality is satisfied for where , then the inequality holds on the interval . Otherwise, the inequality does not hold on the interval .    If the inequality is satisfied for , then the inequality holds on the interval . Otherwise, the inequality does not hold on the interval .       Write down each interval where the inequality holds. Include the endpoints if the inequality is not strict   or . Otherwise, exclude the endpoints.         Find all solutions to the inequality     The roots of the polynomial in order are We choose the test points , , , , , and .     When , This tells us the inequality is satisfied on .    When , This tells us the inequality is not satisfied on .    When , This tells us the inequality is satisfied on .    When , This tells us the inequality is not satisfied on .    When , This tells us the inequality is satisfied on .    When , This tells us the inequality is not satisfied on .   Therefore the inequality holds for all in the set       Solving Polynomial Inequalities Graphically  Solving polynomial inequalities graphically is significantly simpler. However, it has the disadvantage that it requires you to be able to sketch the graph of the polynomial function.    Find all the values of that satisfy the inequality     First, we place the inequality into the form  Since is a concave up parabola with roots and , we can see the inequality is satisfied for all from the graph of    The graph of .         "
},
{
  "id": "inequalities-intro-1",
  "level": "2",
  "url": "sec-inequalities.html#inequalities-intro-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "polynomial inequalities "
},
{
  "id": "def-solution_poly_inequality",
  "level": "2",
  "url": "sec-inequalities.html#def-solution_poly_inequality",
  "type": "Definition",
  "number": "3.9.1",
  "title": "Solution to a Polynomial Inequality.",
  "body": " Solution to a Polynomial Inequality   A solution   Inequality  Solution  to an inequality in the variable is a number that makes the expression true when is substituted for .   "
},
{
  "id": "alg-poly_ineq",
  "level": "2",
  "url": "sec-inequalities.html#alg-poly_ineq",
  "type": "Algorithm",
  "number": "3.9.2",
  "title": "Solving Polynomial Inequalities Algebraically.",
  "body": " Solving Polynomial Inequalities Algebraically   To find the solutions to a polynomial inequality involving the polynomial    Find the distinct real roots of and write them in order from smallest to largest     Find numbers such that     Evaluate at each .   If the inequality is satisfied for , then the inequality holds on the interval . Otherwise, the inequality does not hold on the interval .    If the inequality is satisfied for where , then the inequality holds on the interval . Otherwise, the inequality does not hold on the interval .    If the inequality is satisfied for , then the inequality holds on the interval . Otherwise, the inequality does not hold on the interval .       Write down each interval where the inequality holds. Include the endpoints if the inequality is not strict   or . Otherwise, exclude the endpoints.      "
},
{
  "id": "subsec-alg_solutions_polynomial_ineq-4",
  "level": "2",
  "url": "sec-inequalities.html#subsec-alg_solutions_polynomial_ineq-4",
  "type": "Example",
  "number": "3.9.3",
  "title": "",
  "body": "  Find all solutions to the inequality     The roots of the polynomial in order are We choose the test points , , , , , and .     When , This tells us the inequality is satisfied on .    When , This tells us the inequality is not satisfied on .    When , This tells us the inequality is satisfied on .    When , This tells us the inequality is not satisfied on .    When , This tells us the inequality is satisfied on .    When , This tells us the inequality is not satisfied on .   Therefore the inequality holds for all in the set    "
},
{
  "id": "subsec-solving_polynomial_ineq_graphically-3",
  "level": "2",
  "url": "sec-inequalities.html#subsec-solving_polynomial_ineq_graphically-3",
  "type": "Example",
  "number": "3.9.4",
  "title": "",
  "body": "  Find all the values of that satisfy the inequality     First, we place the inequality into the form  Since is a concave up parabola with roots and , we can see the inequality is satisfied for all from the graph of    The graph of .       "
},
{
  "id": "sec-sytems_of_lines",
  "level": "1",
  "url": "sec-sytems_of_lines.html",
  "type": "Section",
  "number": "4.1",
  "title": "Two Dimensions",
  "body": " Two Dimensions   It is common to encounter situations involving multiple polynomials where we would like to find the points that are solutions to all of the polynomials at once. In the most general situation, we do not place any restrictions on the polynomials involved. This leads to a branch of mathematics called algebraic geometry . The simplest case occurs when each of the polynomials involved is linear, and is known as linear algebra . Both topics are well beyond the scope of this course, so we focus on finding solutions in two very special cases.    Systems of Linear Equations in Two Variables  First we begin with a rigorous definition of a linear system.    A system of linear equations in the variables and   Linear System  Two Variables  is a collection of equations   A solution   Linear System  Two Variables  Solution  to the system is a point that is a solution for every equation in the system.    Solutions to system of equations have geometric meaning. Given a system of linear equations in the variables and , each equation represents a line in standard form . A solution to the linear system is a point that lies on each line we call this a point of intersection   Intersection  Lines      Verify that is a solution to the system of two equations in and      We must verify that is a solution for both equations. For the first equation, and for the second equation       Interpret the solution, , to the system of two equations in and  geometrically.    To graph the lines, we rewrite each line in slope-intercept form  This tells us the first line passes through the points and , and the second line passes through the points and . Plotting these lines, we can see that is the only point of intersection.   The geometric interpretation of the solution to the system.          Dependent Systems  A slightly stranger way for a linear system in the variables and to have a solution is when the lines are the same. In this case, there are infinitely many solutions.    We say a system of linear equations is dependent   Linear System  Dependent  if there are infinitely many solutions to the system.      Verify geometrically that the system has infinitely many solutions.    First, convert each of the lines to slope-intercept form : and We can see in this form that they are the same line, so they intersect infinitely many times. Moreover, the points of intersection all have the form    The solutions to the system          Consistency  In general, a system is not guaranteed to have any solutions. The simplest way this can happen is if two lines in the system are parallel . However, if there are more than two lines, then the system may fail to have any solutions even if no two lines are parallel.    We say a linear system is consistent   Linear Systesm  Consistent  if there is at least one solution. Otherwise, we say the linear system is inconsistent .  Linear System  Inconsistent        Verify geometrically that the system does not have any solutions.    A solution would correspond to a common point of intersection for all three lines. We graph each line by finding two points on each line   The line passes through the points and     The line passes through the points and     The line passes through the points and    When we plot the lines, we can see that each pair intersects, but there is no one point through which all three pass.   The graph of three lines with no common point of intersection          Characterizing Solutions  It is a surprising fact of linear algebra that this essentially characterizes the behavior of every linear system regardless of the number of variables and equations. That is to say, there are three possible behaviors for a linear system:   The system is inconsistent ( no solutions),    The system has exactly one solution, or    The system has infinitely many solutions.       Finding Solutions Algebraically  The simplest way to find solutions to a linear system in two variables is to use a method called substitution   Linear System  Substitution  The method relies on solving one equation in the system for a single variable of your choice and then substituting that into the other equations.    Use substitution to solve the system     The simplest equation to solve for one variable is the second. We simply add to both sides of the equation to find . When we substitute this into the other equation to obtain Divide both side by to see that . Therefore the system has exactly one solution, .     "
},
{
  "id": "def-system_lines",
  "level": "2",
  "url": "sec-sytems_of_lines.html#def-system_lines",
  "type": "Definition",
  "number": "4.1.1",
  "title": "",
  "body": "  A system of linear equations in the variables and   Linear System  Two Variables  is a collection of equations   A solution   Linear System  Two Variables  Solution  to the system is a point that is a solution for every equation in the system.   "
},
{
  "id": "sec-sytems_of_lines-3-4",
  "level": "2",
  "url": "sec-sytems_of_lines.html#sec-sytems_of_lines-3-4",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "intersection "
},
{
  "id": "sec-sytems_of_lines-3-5",
  "level": "2",
  "url": "sec-sytems_of_lines.html#sec-sytems_of_lines-3-5",
  "type": "Example",
  "number": "4.1.2",
  "title": "",
  "body": "  Verify that is a solution to the system of two equations in and      We must verify that is a solution for both equations. For the first equation, and for the second equation    "
},
{
  "id": "sec-sytems_of_lines-3-6",
  "level": "2",
  "url": "sec-sytems_of_lines.html#sec-sytems_of_lines-3-6",
  "type": "Example",
  "number": "4.1.3",
  "title": "",
  "body": "  Interpret the solution, , to the system of two equations in and  geometrically.    To graph the lines, we rewrite each line in slope-intercept form  This tells us the first line passes through the points and , and the second line passes through the points and . Plotting these lines, we can see that is the only point of intersection.   The geometric interpretation of the solution to the system.       "
},
{
  "id": "sec-sytems_of_lines-4-3",
  "level": "2",
  "url": "sec-sytems_of_lines.html#sec-sytems_of_lines-4-3",
  "type": "Definition",
  "number": "4.1.5",
  "title": "",
  "body": "  We say a system of linear equations is dependent   Linear System  Dependent  if there are infinitely many solutions to the system.   "
},
{
  "id": "sec-sytems_of_lines-4-4",
  "level": "2",
  "url": "sec-sytems_of_lines.html#sec-sytems_of_lines-4-4",
  "type": "Example",
  "number": "4.1.6",
  "title": "",
  "body": "  Verify geometrically that the system has infinitely many solutions.    First, convert each of the lines to slope-intercept form : and We can see in this form that they are the same line, so they intersect infinitely many times. Moreover, the points of intersection all have the form    The solutions to the system       "
},
{
  "id": "def-inconsistent",
  "level": "2",
  "url": "sec-sytems_of_lines.html#def-inconsistent",
  "type": "Definition",
  "number": "4.1.8",
  "title": "",
  "body": "  We say a linear system is consistent   Linear Systesm  Consistent  if there is at least one solution. Otherwise, we say the linear system is inconsistent .  Linear System  Inconsistent     "
},
{
  "id": "sec-sytems_of_lines-5-4",
  "level": "2",
  "url": "sec-sytems_of_lines.html#sec-sytems_of_lines-5-4",
  "type": "Example",
  "number": "4.1.9",
  "title": "",
  "body": "  Verify geometrically that the system does not have any solutions.    A solution would correspond to a common point of intersection for all three lines. We graph each line by finding two points on each line   The line passes through the points and     The line passes through the points and     The line passes through the points and    When we plot the lines, we can see that each pair intersects, but there is no one point through which all three pass.   The graph of three lines with no common point of intersection       "
},
{
  "id": "finding_solutions_algebraically-2",
  "level": "2",
  "url": "sec-sytems_of_lines.html#finding_solutions_algebraically-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "substitution "
},
{
  "id": "finding_solutions_algebraically-3",
  "level": "2",
  "url": "sec-sytems_of_lines.html#finding_solutions_algebraically-3",
  "type": "Example",
  "number": "4.1.11",
  "title": "",
  "body": "  Use substitution to solve the system     The simplest equation to solve for one variable is the second. We simply add to both sides of the equation to find . When we substitute this into the other equation to obtain Divide both side by to see that . Therefore the system has exactly one solution, .   "
},
{
  "id": "sec-sytems_of_planes",
  "level": "1",
  "url": "sec-sytems_of_planes.html",
  "type": "Section",
  "number": "4.2",
  "title": "Three Dimensions",
  "body": " Three Dimensions   When we increase the number of variables in a linear system, we increase the dimension of the ambient space. For linear equations with two variables, and , we work in the Cartesian plane. Linear equations with three variables, , , and , require us to work in three dimensional space This adds additional complexity to the geometric interpretation of solutions to linear equations and systems. In particular, a linear equation in three variables no longer represents a line, but rather a plane  a figure in space that looks like the Cartesian plane. Since this is not a course on linear algebra or multivariable calculus two courses dedicated to the study of higher dimensional spaces we will leave our discussion of the geometry at that, and focus on solving systems algebraically.    Systems of Linear Equations in Three Variables  The same terminology and intuition from linear systems in two variables apply to systems of linear equations in three variables. First, we start with an adaptation of solutions to equations in two varibles to three variables.   Solution to an Equation in Three Variables   A solution   Equation  Solution  Three Variables  to an equation in the variables , , and is an ordered pair that make the equation true when   the first coordinate, , is substituted into the equation for ,    the second coordinate, , is substituted into the equation for , and    the third coordinate, , is substituted into the equation for .       Next, we generalize the notion of a linear equation from two variables to three.   Standard Form a Linear Equation in Three Variables   The standard form a linear equation   Equation  Line  Standard (Three Variables)  in the variables , , and is where , , and are not all zero.    Now, the notion of a linear system in three variables generalizes naturally.    A system of linear equations in the variables , , and   Linear System  Three Variables  is a collection of equations   A solution   Linear System  Three Variables  Solution  to the system is a point that is a solution for every equation in the system.      Solving Linear Systems with Three Equations  Fortunately, the method of substitution also generalizes naturally. To solve a system of equations in three variables, solve one equation of your choosing for one of the variables and substitute into the other equations. This reduces to a linear system in two equations, which we already know how to solve.    Solve the system     We choose to solve the last equation for in terms of : Substitute for in the other two equations to reduce to a system of two linear equations in the variables and , Subtract from both sides of the equation : Substitute into the equation to solve for : Finally, substitute into the equation for to find Therefore there is exactly one solution to the system, .    Unlike linear systems with two equations, it is possible for to obtain a dependent system even when the equations are not the same.    Solve the system     Solve the first equation for in terms of and : Substitute for in the second equation to obtain and solve for in terms of  Finally, substitute into the equation to obtain Therefore the solutions to this system form the line in       "
},
{
  "id": "sec-sytems_of_planes-2-1",
  "level": "2",
  "url": "sec-sytems_of_planes.html#sec-sytems_of_planes-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "plane "
},
{
  "id": "def-solution_3d",
  "level": "2",
  "url": "sec-sytems_of_planes.html#def-solution_3d",
  "type": "Definition",
  "number": "4.2.1",
  "title": "Solution to an Equation in Three Variables.",
  "body": " Solution to an Equation in Three Variables   A solution   Equation  Solution  Three Variables  to an equation in the variables , , and is an ordered pair that make the equation true when   the first coordinate, , is substituted into the equation for ,    the second coordinate, , is substituted into the equation for , and    the third coordinate, , is substituted into the equation for .      "
},
{
  "id": "def-linear_equation_3d",
  "level": "2",
  "url": "sec-sytems_of_planes.html#def-linear_equation_3d",
  "type": "Definition",
  "number": "4.2.2",
  "title": "Standard Form a Linear Equation in Three Variables.",
  "body": " Standard Form a Linear Equation in Three Variables   The standard form a linear equation   Equation  Line  Standard (Three Variables)  in the variables , , and is where , , and are not all zero.   "
},
{
  "id": "def-system_planes",
  "level": "2",
  "url": "sec-sytems_of_planes.html#def-system_planes",
  "type": "Definition",
  "number": "4.2.3",
  "title": "",
  "body": "  A system of linear equations in the variables , , and   Linear System  Three Variables  is a collection of equations   A solution   Linear System  Three Variables  Solution  to the system is a point that is a solution for every equation in the system.   "
},
{
  "id": "sec-sytems_of_planes-4-3",
  "level": "2",
  "url": "sec-sytems_of_planes.html#sec-sytems_of_planes-4-3",
  "type": "Example",
  "number": "4.2.4",
  "title": "",
  "body": "  Solve the system     We choose to solve the last equation for in terms of : Substitute for in the other two equations to reduce to a system of two linear equations in the variables and , Subtract from both sides of the equation : Substitute into the equation to solve for : Finally, substitute into the equation for to find Therefore there is exactly one solution to the system, .   "
},
{
  "id": "sec-sytems_of_planes-4-5",
  "level": "2",
  "url": "sec-sytems_of_planes.html#sec-sytems_of_planes-4-5",
  "type": "Example",
  "number": "4.2.5",
  "title": "",
  "body": "  Solve the system     Solve the first equation for in terms of and : Substitute for in the second equation to obtain and solve for in terms of  Finally, substitute into the equation to obtain Therefore the solutions to this system form the line in     "
},
{
  "id": "sec-alg_comb_functions",
  "level": "1",
  "url": "sec-alg_comb_functions.html",
  "type": "Section",
  "number": "5.1",
  "title": "Algebraic Combinations of Functions",
  "body": " Algebraic Combinations of Functions   The simplest way to construct new functions from existing functions is to use the four arithmetic operations.    Sums and Differences of Functions   Sum of Functions      Sum of and    Assume and are functions. The sum   Function  Sum  of and is the function defined by      Suppose and are functions. Since addition of real numbers is commutative the order of addition of functions is also commutative because That is to say or, in words, the sum of and is the same as the sum of and .    Difference of Functions      Difference of and    Assume and are functions. The difference   Function  Difference  of and is the function defined by       Consider the functions defined by and defined by . Find the domain of the sum of and , and an expression for .    The intersection of the domains is so the sum of and is the function defined by   In particular, we can evaluate at by       Consider the functions defined by and defined by . Find the domain of the difference of and , and an expression for .    The intersection of the domains is so the difference of and is the function defined by   In particular, we can evaluate at by      Unlike the sum of functions, the difference of functions is not commutative .     Consider the functions defined by and defined by . Find the domain of the difference of and , and an expression for . Conclude that as functions.    The intersection of the domains is so the difference of and is the function defined by   We can see this is not the same as the function because       Products and Ratios of Functions   Product of Functions      Product of and    Assume and are functions. The product   Function  Product  of and is the function defined by      Suppose and are functions that output real numbers. Since multiplication of real numbers is commutative the order of multiplication of functions is also commutative because That is to say or, in words, the product of and is the same as the product of and .    Ratio of Functions      Ratio of and    Assume and are functions, and for every , . The ratio   Function  Ratio  of and is the function defined by       Consider the functions defined by and defined by . Find the domain of the product of and , and an expression for .    The intersection of the domains is so the product of and is the function defined by   In particular, we can evaluate at by       Consider the functions defined by and defined by . Find the domain of the ratio of and , and an expression for .    The function is non-zero on the set The intersection with the domain of is the set of positive real numbers so the ratio of and is the function defined by   In particular, we can evaluate at by      Unlike the sum and product of functions, the ratio of functions is not commutative .     Consider the functions defined by and defined by . Find the domain of the ratio of and , and an expression for . Conclude that as functions.    The function is non-zero on the set . The intersection with the domain of is the set of positive real numbers so the ratio of and is the function defined by   In particular, we can evaluate at to see      "
},
{
  "id": "def-sum_functions",
  "level": "2",
  "url": "sec-alg_comb_functions.html#def-sum_functions",
  "type": "Definition",
  "number": "5.1.1",
  "title": "Sum of Functions.",
  "body": " Sum of Functions      Sum of and    Assume and are functions. The sum   Function  Sum  of and is the function defined by    "
},
{
  "id": "subsec-sum_diff_functions-3",
  "level": "2",
  "url": "sec-alg_comb_functions.html#subsec-sum_diff_functions-3",
  "type": "Remark",
  "number": "5.1.2",
  "title": "",
  "body": " Suppose and are functions. Since addition of real numbers is commutative the order of addition of functions is also commutative because That is to say or, in words, the sum of and is the same as the sum of and .  "
},
{
  "id": "def-difference_functions",
  "level": "2",
  "url": "sec-alg_comb_functions.html#def-difference_functions",
  "type": "Definition",
  "number": "5.1.3",
  "title": "Difference of Functions.",
  "body": " Difference of Functions      Difference of and    Assume and are functions. The difference   Function  Difference  of and is the function defined by    "
},
{
  "id": "subsec-sum_diff_functions-5",
  "level": "2",
  "url": "sec-alg_comb_functions.html#subsec-sum_diff_functions-5",
  "type": "Example",
  "number": "5.1.4",
  "title": "",
  "body": "  Consider the functions defined by and defined by . Find the domain of the sum of and , and an expression for .    The intersection of the domains is so the sum of and is the function defined by   In particular, we can evaluate at by    "
},
{
  "id": "subsec-sum_diff_functions-6",
  "level": "2",
  "url": "sec-alg_comb_functions.html#subsec-sum_diff_functions-6",
  "type": "Example",
  "number": "5.1.5",
  "title": "",
  "body": "  Consider the functions defined by and defined by . Find the domain of the difference of and , and an expression for .    The intersection of the domains is so the difference of and is the function defined by   In particular, we can evaluate at by    "
},
{
  "id": "subsec-sum_diff_functions-7",
  "level": "2",
  "url": "sec-alg_comb_functions.html#subsec-sum_diff_functions-7",
  "type": "Warning",
  "number": "5.1.6",
  "title": "",
  "body": " Unlike the sum of functions, the difference of functions is not commutative .  "
},
{
  "id": "subsec-sum_diff_functions-8",
  "level": "2",
  "url": "sec-alg_comb_functions.html#subsec-sum_diff_functions-8",
  "type": "Example",
  "number": "5.1.7",
  "title": "",
  "body": "  Consider the functions defined by and defined by . Find the domain of the difference of and , and an expression for . Conclude that as functions.    The intersection of the domains is so the difference of and is the function defined by   We can see this is not the same as the function because    "
},
{
  "id": "def-product_functions",
  "level": "2",
  "url": "sec-alg_comb_functions.html#def-product_functions",
  "type": "Definition",
  "number": "5.1.8",
  "title": "Product of Functions.",
  "body": " Product of Functions      Product of and    Assume and are functions. The product   Function  Product  of and is the function defined by    "
},
{
  "id": "sec-alg_comb_functions-4-3",
  "level": "2",
  "url": "sec-alg_comb_functions.html#sec-alg_comb_functions-4-3",
  "type": "Remark",
  "number": "5.1.9",
  "title": "",
  "body": " Suppose and are functions that output real numbers. Since multiplication of real numbers is commutative the order of multiplication of functions is also commutative because That is to say or, in words, the product of and is the same as the product of and .  "
},
{
  "id": "def-ratio_functions",
  "level": "2",
  "url": "sec-alg_comb_functions.html#def-ratio_functions",
  "type": "Definition",
  "number": "5.1.10",
  "title": "Ratio of Functions.",
  "body": " Ratio of Functions      Ratio of and    Assume and are functions, and for every , . The ratio   Function  Ratio  of and is the function defined by    "
},
{
  "id": "sec-alg_comb_functions-4-5",
  "level": "2",
  "url": "sec-alg_comb_functions.html#sec-alg_comb_functions-4-5",
  "type": "Example",
  "number": "5.1.11",
  "title": "",
  "body": "  Consider the functions defined by and defined by . Find the domain of the product of and , and an expression for .    The intersection of the domains is so the product of and is the function defined by   In particular, we can evaluate at by    "
},
{
  "id": "sec-alg_comb_functions-4-6",
  "level": "2",
  "url": "sec-alg_comb_functions.html#sec-alg_comb_functions-4-6",
  "type": "Example",
  "number": "5.1.12",
  "title": "",
  "body": "  Consider the functions defined by and defined by . Find the domain of the ratio of and , and an expression for .    The function is non-zero on the set The intersection with the domain of is the set of positive real numbers so the ratio of and is the function defined by   In particular, we can evaluate at by    "
},
{
  "id": "sec-alg_comb_functions-4-7",
  "level": "2",
  "url": "sec-alg_comb_functions.html#sec-alg_comb_functions-4-7",
  "type": "Warning",
  "number": "5.1.13",
  "title": "",
  "body": " Unlike the sum and product of functions, the ratio of functions is not commutative .  "
},
{
  "id": "sec-alg_comb_functions-4-8",
  "level": "2",
  "url": "sec-alg_comb_functions.html#sec-alg_comb_functions-4-8",
  "type": "Example",
  "number": "5.1.14",
  "title": "",
  "body": "  Consider the functions defined by and defined by . Find the domain of the ratio of and , and an expression for . Conclude that as functions.    The function is non-zero on the set . The intersection with the domain of is the set of positive real numbers so the ratio of and is the function defined by   In particular, we can evaluate at to see    "
},
{
  "id": "sec-rational_functions",
  "level": "1",
  "url": "sec-rational_functions.html",
  "type": "Section",
  "number": "5.2",
  "title": "Rational Functions",
  "body": " Rational Functions   A special case of ratios of functions arise when both the numerator and denominator are polynomials. These functions are of significant importance in many areas of mathematics, as well as its applications.    The Domain of a Rational Function    A rational function is a function of the form where and are polynomial functions.    Since polynomial functions always have domain and codomain , the domain of the rational function is the set     Find the domain of the rational function     This expression is undefined whenever Since the only solutions to this equation are and , the domain of is This is the set of all numbers except and , which we can express as the union of intervals       Simplifying Rational Functions  Recall that we always write rational numbers in lowest terms. For example, instead of writing , we cancel the common factor of in the numerator and denominator to write . The same is true for rational functions, although some extra care is required.    Simplify the function defined by in lowest terms. What is the domain of this simplified function?    To simplify the expression, factor the numerator as and cancel the common factors in the numerator and denominator   It is important to remember that this simplification only holds for elements of the domain of the function ! This says that is equal to the function defined by . However, the function defined by is not equal to the function because the functions and do not have the same domain.      Sums and Differences of Rational Functions  Recall that in order to add or subtract rational numbers, we must find a common denominator. For example, to add and , we use the common denominator  The same is true for rational functions, provided we are careful with the denominator.    Find the sum of the rational functions defined by What is the domain of this function?    To add these functions, we must first find a common denominator. We use the least common multiple of and , which is Once we have the common denominator, the process of adding rational functions is nearly the same as for rational numbers:   By , the function is only defined where both of and are defined. Therefore the sum of and is the function defined by       Products and Ratios of Rational Functions  Recall that when we multiply two rational numbers we multiply the numerators and denominators. For example, When we divide one rational number by another, we multiply the one by the reciprocal of the other. For example The same is true for products and ratios of rational functions.    Find the product of the rational functions defined by     We multiply the rational functions by multiplying the numerators and the denominators   By , the function is only defined where both  and are defined. Therefore product of and is the function defined by       Find the ratio of the rational functions defined by     We can divide these rational functions by multiplying by the reciprocal of :   By , the function is only defined where both  and are defined and  is non-zero. Therefore is the function defined by       Rational Equations and Inequalities  Just as with polynomials, we may wish to solve equations or inequalities involving rational functions. Fortunately, with some care, rational equations and inequalities quickly reduce to polynomial equations or inequalities by simply multiplying both sides by the denominator.  Rational inequalities are defined nearly identically to polynomial inequalities.   Rational Inequality   Assume and are polynomial functions. A rational inequality   Inequality  Rational  is a relation of the form    ,     ,     , or     .       The solutions are also similarly defined.   Solution to a Rational Inequality   A solution   Inequality  Solution  to an inequality in the variable is a number that makes the expression true when is substituted for .      Solve the equation     First we note the domain of the rational function is the set As long as , we may multiply both sides of the equation by the non-zero quantity to obtain the polynomial equation Therefore the two solutions are and       Solve the rational inequality     First, we must place the inequality in the form We do this using the operations above   Once the inequality is in the proper form, our goal is to reduce from a rational inequality to one or more polynomial inequalities. The tricky part is dealing with the sign of the denominator. We observe that the denominator is positive on the set and negative on . Since multiplying both sides of an inequality reverses the inequality we must handle these two regions separately.  When , we obtain the polynomial inequality The quadratic is a downward facing parabola with roots at . Since it follows that the inequality holds on all of .   Solutions to the inequality      When , we obtain the polynomial inequality Again, as the quadratic is a downward facing parabola with roots at , the solutions to this inequality are on the left- and right-hand sides of the roots    Solutions to the inequality      Combining the solutions to each part, we obtain the solution to the rational inequality      "
},
{
  "id": "def-rational_function",
  "level": "2",
  "url": "sec-rational_functions.html#def-rational_function",
  "type": "Definition",
  "number": "5.2.1",
  "title": "",
  "body": "  A rational function is a function of the form where and are polynomial functions.   "
},
{
  "id": "sec-rational_functions-3-4",
  "level": "2",
  "url": "sec-rational_functions.html#sec-rational_functions-3-4",
  "type": "Example",
  "number": "5.2.2",
  "title": "",
  "body": "  Find the domain of the rational function     This expression is undefined whenever Since the only solutions to this equation are and , the domain of is This is the set of all numbers except and , which we can express as the union of intervals    "
},
{
  "id": "sec-rational_functions-4-3",
  "level": "2",
  "url": "sec-rational_functions.html#sec-rational_functions-4-3",
  "type": "Example",
  "number": "5.2.3",
  "title": "",
  "body": "  Simplify the function defined by in lowest terms. What is the domain of this simplified function?    To simplify the expression, factor the numerator as and cancel the common factors in the numerator and denominator   It is important to remember that this simplification only holds for elements of the domain of the function ! This says that is equal to the function defined by . However, the function defined by is not equal to the function because the functions and do not have the same domain.   "
},
{
  "id": "sec-rational_functions-5-3",
  "level": "2",
  "url": "sec-rational_functions.html#sec-rational_functions-5-3",
  "type": "Example",
  "number": "5.2.4",
  "title": "",
  "body": "  Find the sum of the rational functions defined by What is the domain of this function?    To add these functions, we must first find a common denominator. We use the least common multiple of and , which is Once we have the common denominator, the process of adding rational functions is nearly the same as for rational numbers:   By , the function is only defined where both of and are defined. Therefore the sum of and is the function defined by    "
},
{
  "id": "sec-rational_functions-6-3",
  "level": "2",
  "url": "sec-rational_functions.html#sec-rational_functions-6-3",
  "type": "Example",
  "number": "5.2.5",
  "title": "",
  "body": "  Find the product of the rational functions defined by     We multiply the rational functions by multiplying the numerators and the denominators   By , the function is only defined where both  and are defined. Therefore product of and is the function defined by    "
},
{
  "id": "sec-rational_functions-6-4",
  "level": "2",
  "url": "sec-rational_functions.html#sec-rational_functions-6-4",
  "type": "Example",
  "number": "5.2.6",
  "title": "",
  "body": "  Find the ratio of the rational functions defined by     We can divide these rational functions by multiplying by the reciprocal of :   By , the function is only defined where both  and are defined and  is non-zero. Therefore is the function defined by    "
},
{
  "id": "def-rational_ineq",
  "level": "2",
  "url": "sec-rational_functions.html#def-rational_ineq",
  "type": "Definition",
  "number": "5.2.7",
  "title": "Rational Inequality.",
  "body": " Rational Inequality   Assume and are polynomial functions. A rational inequality   Inequality  Rational  is a relation of the form    ,     ,     , or     .      "
},
{
  "id": "def-solution_rational_inequality",
  "level": "2",
  "url": "sec-rational_functions.html#def-solution_rational_inequality",
  "type": "Definition",
  "number": "5.2.8",
  "title": "Solution to a Rational Inequality.",
  "body": " Solution to a Rational Inequality   A solution   Inequality  Solution  to an inequality in the variable is a number that makes the expression true when is substituted for .   "
},
{
  "id": "sec-rational_functions-7-7",
  "level": "2",
  "url": "sec-rational_functions.html#sec-rational_functions-7-7",
  "type": "Example",
  "number": "5.2.9",
  "title": "",
  "body": "  Solve the equation     First we note the domain of the rational function is the set As long as , we may multiply both sides of the equation by the non-zero quantity to obtain the polynomial equation Therefore the two solutions are and    "
},
{
  "id": "sec-rational_functions-7-8",
  "level": "2",
  "url": "sec-rational_functions.html#sec-rational_functions-7-8",
  "type": "Example",
  "number": "5.2.10",
  "title": "",
  "body": "  Solve the rational inequality     First, we must place the inequality in the form We do this using the operations above   Once the inequality is in the proper form, our goal is to reduce from a rational inequality to one or more polynomial inequalities. The tricky part is dealing with the sign of the denominator. We observe that the denominator is positive on the set and negative on . Since multiplying both sides of an inequality reverses the inequality we must handle these two regions separately.  When , we obtain the polynomial inequality The quadratic is a downward facing parabola with roots at . Since it follows that the inequality holds on all of .   Solutions to the inequality      When , we obtain the polynomial inequality Again, as the quadratic is a downward facing parabola with roots at , the solutions to this inequality are on the left- and right-hand sides of the roots    Solutions to the inequality      Combining the solutions to each part, we obtain the solution to the rational inequality    "
},
{
  "id": "sec-composition",
  "level": "1",
  "url": "sec-composition.html",
  "type": "Section",
  "number": "5.3",
  "title": "Composition",
  "body": " Composition   When we study numbers in an elementary mathematics course, we focus primarily on operations that we can perform with numbers like addition and multiplication. While we have seen we can perform these same operations with functions, there is one operation that is particular to functions that we study here. It is important because it provides a way to create complicated functions from simpler functions.    Composition of Functions   Assume and are functions with . The composition   Function  Composition  of with is the function      Composition of with  defined by      It is important to ensure the range of the function is contained within the domain of the function . If not, the composition does not make sense.     The function defined by  cannot be composed with the function defined by because is not a real number when !      Consider the functions defined by and defined by . Find the composition of with .    The composition of with is the function defined by      The order of composition matters. Even if and are both well-defined and have the same domain, these two functions are not the same in general.     Consider the functions defined by and defined by . Find the composition of with . Verify that it is not the same as the composition of with .    The composition of with is the function defined by     "
},
{
  "id": "def-function_comp",
  "level": "2",
  "url": "sec-composition.html#def-function_comp",
  "type": "Definition",
  "number": "5.3.1",
  "title": "Composition of Functions.",
  "body": " Composition of Functions   Assume and are functions with . The composition   Function  Composition  of with is the function      Composition of with  defined by    "
},
{
  "id": "sec-composition-4",
  "level": "2",
  "url": "sec-composition.html#sec-composition-4",
  "type": "Warning",
  "number": "5.3.2",
  "title": "",
  "body": " It is important to ensure the range of the function is contained within the domain of the function . If not, the composition does not make sense.  "
},
{
  "id": "sec-composition-5",
  "level": "2",
  "url": "sec-composition.html#sec-composition-5",
  "type": "Example",
  "number": "5.3.3",
  "title": "",
  "body": "  The function defined by  cannot be composed with the function defined by because is not a real number when !   "
},
{
  "id": "sec-composition-6",
  "level": "2",
  "url": "sec-composition.html#sec-composition-6",
  "type": "Example",
  "number": "5.3.4",
  "title": "",
  "body": "  Consider the functions defined by and defined by . Find the composition of with .    The composition of with is the function defined by    "
},
{
  "id": "sec-composition-7",
  "level": "2",
  "url": "sec-composition.html#sec-composition-7",
  "type": "Warning",
  "number": "5.3.5",
  "title": "",
  "body": " The order of composition matters. Even if and are both well-defined and have the same domain, these two functions are not the same in general.  "
},
{
  "id": "example-composition_not_commutative",
  "level": "2",
  "url": "sec-composition.html#example-composition_not_commutative",
  "type": "Example",
  "number": "5.3.6",
  "title": "",
  "body": "  Consider the functions defined by and defined by . Find the composition of with . Verify that it is not the same as the composition of with .    The composition of with is the function defined by    "
},
{
  "id": "sec-inverses",
  "level": "1",
  "url": "sec-inverses.html",
  "type": "Section",
  "number": "5.4",
  "title": "Composition Inverses",
  "body": " Composition Inverses   In keeping with the analogy with operations on numbers, recall the operations of addition and multiplication both have distinguished elements. The number is called the additive identity   Identity  Additive  because every real number remains unchanged when is added to it   Similarly, the number is called the multiplicative identity   Identity  Multiplicative  because every real number remains unchanged when it is multiplied by      Identities  We introduced the idea of an identity using two familiar operations to highlight that the identity element depends on the operation. However, the essential behavior of the identity element is the same: when we perform the operation using the identity, nothing changes. This tells us exactly how the identity element for the function composition operation should behave.   Identity Function   Assume is a set. The identity function on is the function defined by     Unlike addition and multiplication, the order of function composition matters, as we have seen in . Complicating matters more, not all functions can be composed. For a function ,   the composition only makes sense when the domain of contains the range of , and    the composition only makes sense when the range of is contained in the domain of .   For this reason, there is not one single identity function that satisfies the condition and .  Instead, we need to consider the identity functions on the domain and codomain of . The identity function on satisfies because and the identity function on satisfies because .    Composition Inverses  The identity elements for these operations are important because they provide a method for \"undoing\" the operation. This is easiest to understand by considering addition and multiplication first. For any real number , the additive inverse   Inverse  Additive  is the real number that satisfies If we add the number to another number , then we obtain the number . We can \"undo\" this operation by performing the operation \"add the additive inverse of \" -- which we normally just call \"subtract \" -- in the sense that Similarly, we note that the operation \"add c\" will \"undo\" the operation \"subtract \" in the sense that   The operations \"add \" and \"subtract \" define functions and by We can view and in terms of composition:          The story is similar for multiplication. For any non-zero real number , the multiplicative inverse   Inverse  Multiplicative  of is the real number that satisfies Multiplication by and multiplication by define functions by Just as with addition, these two functions \"undo\" one another in the sense that          Less formally, one often says \"division by \" instead of \"multiplication by .\"  These are two canonical examples of functions that are invertible , and the ideas captured in inverting addition and multiplication motivate the more general definition.   Composition Inverse   Assume is a function. The composition inverse , if it exists, is a function that satisfies or, equivalently, for every , and for every , .  If has a composition inverse, then we say is invertible .  Function  Invertible       Mathematicians commonly use the word \"inverse\" or \"invertible\" without explicitly stating the operation. It is important to infer the meaning from the context. If the object being discussed is a function, then \"inverse\" means composition inverse, not multiplicative inverse. That is to say,   In order to avoid confusion, we will avoid using the notation and write either or whenever we refer to a fraction with the function in the denominator.     Properties of Invertible Functions  For a function with a composition inverse, the codomain of and the domain of agree. For every , the element satisfies by definition. This provides useful information about the range of an invertible function .    If is a function with a composition inverse, then the range of is     The definition of a composition inverse is symmetric in the sense that the inverse of is and the inverse of is .    If is a function with inverse , then has a composition inverse and      In the language of , the functions \"add \" and \"add \" (or \"subtract \") are a pair of inverse functions   Similarly, the functions \"multiply by \" and \"multiply by \" (or \"divide by \") are a pair of inverse functions     In general, a linear function is invertible if . To evaluate at the real number , we perform the following operations   Multiply by ,    Add to .   This allows us to decompose as the function \"add \" composed with the function \"multiply by \" Since each function is invertible, we can invert by performing the inverse operations in reverse order, like peeling back the layers of an onion.  Write for the result of applying to . We would invert (or \"undo\") the operation of applying to by performing the operations   Subtract from     Divide by ( Important: This is why we required !)   Note this is equivalent to solving the equation for in terms of   In the language of , the inverse of is the composition   Finally, we can check these are in fact inverses of one another by checking the two compositions explicitly:                                         Our observations about compositions of invertible functions in are true in general.    Assume and are invertible functions. If the composition is well-defined, then is invertible and     As a final example, we illustrate why it is necessary to pay close attention to the domain of a function.   Consider the quadratic function defined by . This function is not invertible .  To see why, we must observe that if an inverse function exists, then by , it must have the form and for every positive number , we must assign a single number such that   However, there are always two such values: a positive number and its negative . This means we must choose one of these two values to be . Unfortunately, both decisions fail to produce an inverse for .  If we decide that is the positive number such that , then   On the other hand, if we decide that is the negative number such that , then Fortunately, these two problems suggest simple solutions.  In the first case, we simply exclude the negative numbers from the domain of . This operation is called restriction   Function  Restriction  and produces a new function defined by . This function becomes invertible and its inverse is the principle square root function   Function  Square Root   defined by . For every non-negative number ,          In the second case, we restrict the domain of to the negative numbers. This produces a new function defined by . The function is invertible and its inverse is the function defined by . For every non-negative real number ,            "
},
{
  "id": "inverses-intro-1",
  "level": "2",
  "url": "sec-inverses.html#inverses-intro-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "additive identity "
},
{
  "id": "inverses-intro-2",
  "level": "2",
  "url": "sec-inverses.html#inverses-intro-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "multiplicative identity "
},
{
  "id": "subsec-identities-3",
  "level": "2",
  "url": "sec-inverses.html#subsec-identities-3",
  "type": "Definition",
  "number": "5.4.1",
  "title": "Identity Function.",
  "body": " Identity Function   Assume is a set. The identity function on is the function defined by    "
},
{
  "id": "subsec-comp_inverses-2",
  "level": "2",
  "url": "sec-inverses.html#subsec-comp_inverses-2",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "additive inverse "
},
{
  "id": "subsec-comp_inverses-5",
  "level": "2",
  "url": "sec-inverses.html#subsec-comp_inverses-5",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "multiplicative inverse "
},
{
  "id": "def-composition_inverse",
  "level": "2",
  "url": "sec-inverses.html#def-composition_inverse",
  "type": "Definition",
  "number": "5.4.2",
  "title": "Composition Inverse.",
  "body": " Composition Inverse   Assume is a function. The composition inverse , if it exists, is a function that satisfies or, equivalently, for every , and for every , .  If has a composition inverse, then we say is invertible .  Function  Invertible     "
},
{
  "id": "subsec-comp_inverses-10",
  "level": "2",
  "url": "sec-inverses.html#subsec-comp_inverses-10",
  "type": "Warning",
  "number": "5.4.3",
  "title": "",
  "body": " Mathematicians commonly use the word \"inverse\" or \"invertible\" without explicitly stating the operation. It is important to infer the meaning from the context. If the object being discussed is a function, then \"inverse\" means composition inverse, not multiplicative inverse. That is to say,   In order to avoid confusion, we will avoid using the notation and write either or whenever we refer to a fraction with the function in the denominator.  "
},
{
  "id": "thm-invertible_is_surjective",
  "level": "2",
  "url": "sec-inverses.html#thm-invertible_is_surjective",
  "type": "Theorem",
  "number": "5.4.4",
  "title": "",
  "body": "  If is a function with a composition inverse, then the range of is    "
},
{
  "id": "subsec-props_invertible-5",
  "level": "2",
  "url": "sec-inverses.html#subsec-props_invertible-5",
  "type": "Theorem",
  "number": "5.4.5",
  "title": "",
  "body": "  If is a function with inverse , then has a composition inverse and    "
},
{
  "id": "example-inverse_of_arithmetics",
  "level": "2",
  "url": "sec-inverses.html#example-inverse_of_arithmetics",
  "type": "Example",
  "number": "5.4.6",
  "title": "",
  "body": " In the language of , the functions \"add \" and \"add \" (or \"subtract \") are a pair of inverse functions   Similarly, the functions \"multiply by \" and \"multiply by \" (or \"divide by \") are a pair of inverse functions   "
},
{
  "id": "example-inverse_of_composition",
  "level": "2",
  "url": "sec-inverses.html#example-inverse_of_composition",
  "type": "Example",
  "number": "5.4.7",
  "title": "",
  "body": " In general, a linear function is invertible if . To evaluate at the real number , we perform the following operations   Multiply by ,    Add to .   This allows us to decompose as the function \"add \" composed with the function \"multiply by \" Since each function is invertible, we can invert by performing the inverse operations in reverse order, like peeling back the layers of an onion.  Write for the result of applying to . We would invert (or \"undo\") the operation of applying to by performing the operations   Subtract from     Divide by ( Important: This is why we required !)   Note this is equivalent to solving the equation for in terms of   In the language of , the inverse of is the composition   Finally, we can check these are in fact inverses of one another by checking the two compositions explicitly:          "
},
{
  "id": "formula-inverse_of_composition",
  "level": "2",
  "url": "sec-inverses.html#formula-inverse_of_composition",
  "type": "Formula",
  "number": "5.4.8",
  "title": "",
  "body": "  Assume and are invertible functions. If the composition is well-defined, then is invertible and    "
},
{
  "id": "example-parabola_not_invertible",
  "level": "2",
  "url": "sec-inverses.html#example-parabola_not_invertible",
  "type": "Example",
  "number": "5.4.9",
  "title": "",
  "body": " Consider the quadratic function defined by . This function is not invertible .  To see why, we must observe that if an inverse function exists, then by , it must have the form and for every positive number , we must assign a single number such that   However, there are always two such values: a positive number and its negative . This means we must choose one of these two values to be . Unfortunately, both decisions fail to produce an inverse for .  If we decide that is the positive number such that , then   On the other hand, if we decide that is the negative number such that , then Fortunately, these two problems suggest simple solutions.  In the first case, we simply exclude the negative numbers from the domain of . This operation is called restriction   Function  Restriction  and produces a new function defined by . This function becomes invertible and its inverse is the principle square root function   Function  Square Root   defined by . For every non-negative number ,          In the second case, we restrict the domain of to the negative numbers. This produces a new function defined by . The function is invertible and its inverse is the function defined by . For every non-negative real number ,          "
},
{
  "id": "sec-graphing_inverse_functions",
  "level": "1",
  "url": "sec-graphing_inverse_functions.html",
  "type": "Section",
  "number": "5.5",
  "title": "Graphing Inverse Functions",
  "body": " Graphing Inverse Functions   A Little Symmetry  Assume and is a function with inverse . In order to visualize the inverse of a function, it is helpful to recall from that the graph of is the set of points in the Cartesian plane.  Since we have been conditioned by training to think about the input to a function being named and the output of a function being named , we opt to write instead of . This distinction is meaningless in practice, but prompts us to think about the input to as the output of .  We made these observations more precise in , which asserts that every can be written in the form for some  . This allows us to describe the graph of as the set of points Note that we started by describing the points on the graph of in terms of and ended by describing the points on the graph of in terms of . This description tells us that we can obtain the graph of from the graph of by interchanging the - and -coordinates.  Using the , we can exploit this relationship to describe symmetry between the graph of and the graph of as follows. Each corresponds to a point on the graph of and a point on the graph of . The midpoint of the line that connects these two points has coordinates Since the - and -coordinates are the same, the midpoint lies on the line . This says that if we were to plot and together, the image would have symmetry about the line . This allows us to conclude the following.    The graph of is obtained by reflecting the graph of across the line .      The Horizontal Line Test  The importance of is that it provides a geometric condition for testing whether a function is invertible.    Assume . A function is invertible if and only if the graph represents a function.    We can improve significantly with a few key observations. Recall that we can test whether a graph represents a function using . The graph of the vertical line , where is a constant, is the set of points Reflecting this graph across the line interchanges the two coordinates, so we can express the resulting graph as the set As the -coordinate is fixed and the -coordinate is allowed to vary, we can recognize this as the horizontal line . This provides a geometric condition for invertibility that depends only on the graph of the original function .                                       The Horizontal Line Test   Assume . The function is invertible if and only if every horizontal line intersects the graph of in at most one point.     Consider the graph of the function defined by . When we observed that for every positive number , there are two -values that square to , we were observing that every horizontal line intersects the parabola in two places.   The two points of intersection between the parabola and a horizontal line      When we restrict the domain to the set , we fix this problem by removing the left half of the parabola. This makes the function invertible with inverse the principal square root function.   Removing the left-hand side of the parabola    The restriction of to        The principal square root function        On the other hand, we could also remove the right-hand side of the parabola. This creates another invertible function. The inverse of this function is the reflection of the principal square root across the -axis.   Removing the right-hand side of the parabola    The restriction of to .       The inverse of the restriction.           Root Functions  A useful consequence of is that we may define functions with rational exponents.   Odd Root Function   Assume is an odd, positive integer and is the function defined by . The root function   Function  Root  Odd   given by is defined to be the inverse of .     Even Root Function   Assume is an even, positive integer and is the function defined by . The root function   Function  Root  Even   given by is defined to be the inverse of .     "
},
{
  "id": "thm-graph_of_inverse",
  "level": "2",
  "url": "sec-graphing_inverse_functions.html#thm-graph_of_inverse",
  "type": "Theorem",
  "number": "5.5.1",
  "title": "",
  "body": "  The graph of is obtained by reflecting the graph of across the line .   "
},
{
  "id": "thm-invertible_iff_function",
  "level": "2",
  "url": "sec-graphing_inverse_functions.html#thm-invertible_iff_function",
  "type": "Theorem",
  "number": "5.5.2",
  "title": "",
  "body": "  Assume . A function is invertible if and only if the graph represents a function.   "
},
{
  "id": "thm-horizontal_line_test",
  "level": "2",
  "url": "sec-graphing_inverse_functions.html#thm-horizontal_line_test",
  "type": "Theorem",
  "number": "5.5.3",
  "title": "The Horizontal Line Test.",
  "body": " The Horizontal Line Test   Assume . The function is invertible if and only if every horizontal line intersects the graph of in at most one point.   "
},
{
  "id": "subsec-horizontal_line_test-6",
  "level": "2",
  "url": "sec-graphing_inverse_functions.html#subsec-horizontal_line_test-6",
  "type": "Example",
  "number": "5.5.4",
  "title": "",
  "body": " Consider the graph of the function defined by . When we observed that for every positive number , there are two -values that square to , we were observing that every horizontal line intersects the parabola in two places.   The two points of intersection between the parabola and a horizontal line      When we restrict the domain to the set , we fix this problem by removing the left half of the parabola. This makes the function invertible with inverse the principal square root function.   Removing the left-hand side of the parabola    The restriction of to        The principal square root function        On the other hand, we could also remove the right-hand side of the parabola. This creates another invertible function. The inverse of this function is the reflection of the principal square root across the -axis.   Removing the right-hand side of the parabola    The restriction of to .       The inverse of the restriction.        "
},
{
  "id": "def-odd_root_functions",
  "level": "2",
  "url": "sec-graphing_inverse_functions.html#def-odd_root_functions",
  "type": "Definition",
  "number": "5.5.8",
  "title": "Odd Root Function.",
  "body": " Odd Root Function   Assume is an odd, positive integer and is the function defined by . The root function   Function  Root  Odd   given by is defined to be the inverse of .   "
},
{
  "id": "def-even_root_functions",
  "level": "2",
  "url": "sec-graphing_inverse_functions.html#def-even_root_functions",
  "type": "Definition",
  "number": "5.5.9",
  "title": "Even Root Function.",
  "body": " Even Root Function   Assume is an even, positive integer and is the function defined by . The root function   Function  Root  Even   given by is defined to be the inverse of .   "
},
{
  "id": "sec-piecewise",
  "level": "1",
  "url": "sec-piecewise.html",
  "type": "Section",
  "number": "5.6",
  "title": "Piecewise Defined Functions",
  "body": " Piecewise Defined Functions  A powerful method for constructing new functions from existing functions is to \"glue\" two or more functions together.   Piecewise Defined Function   Let be a positive integer. Assume are pairwise disjoint sets, meaning whenever , and let . Suppose are functions. The function defined by is called a piecewise defined function .  Function  Piecewise Defined        Write the absolute value funtion as a piecewise defined function.    If is a real number, then If is a real number, then Therefore     "
},
{
  "id": "def-piecewise",
  "level": "2",
  "url": "sec-piecewise.html#def-piecewise",
  "type": "Definition",
  "number": "5.6.1",
  "title": "Piecewise Defined Function.",
  "body": " Piecewise Defined Function   Let be a positive integer. Assume are pairwise disjoint sets, meaning whenever , and let . Suppose are functions. The function defined by is called a piecewise defined function .  Function  Piecewise Defined     "
},
{
  "id": "sec-piecewise-4",
  "level": "2",
  "url": "sec-piecewise.html#sec-piecewise-4",
  "type": "Example",
  "number": "5.6.2",
  "title": "",
  "body": "  Write the absolute value funtion as a piecewise defined function.    If is a real number, then If is a real number, then Therefore    "
},
{
  "id": "sec-exponentials",
  "level": "1",
  "url": "sec-exponentials.html",
  "type": "Section",
  "number": "6.1",
  "title": "The Exponential Function",
  "body": " The Exponential Function   So far, all of the functions we have encountered are either polynomials or can be constructed from polynomial equations using algebraic operations. A transcendental function   Function  Transcendental  is any function that cannot be constructed in this manner. While it is certainly odd to discuss functions that cannot be constructed by algebraic means in a course on algebra, many calculus courses expect students to already be familiar with these functions. We focus solely on the algebraic properties of these functions.    Properties of the Exponential Function  We start with the definition of a constant. Much like the number , this number cannot be constructed using algebraic methods. Indeed, the proper definition requires calculus, so we provide only a numerical approximation.   Euler's Number    Euler's number   Euler's Number  is the constant .   Euler's number      This constant is essential to the definition of the exponential function.   The Exponential Function   The exponential function   Function  Exponential   is defined by .    We can think about the value of the exponential function at a positive real number as the result of multiplying copies of the number : This definition extends to all real numbers by defining   An interesting consequence of these definitions is that the exponential function transforms addition of the input into multiplication of the output and subtraction of the input into division of the output. For addition of the input, we take advantage of the fact that multiplication is associative to write   For subtraction of the inverse, we note that , so   These two properties also provide a convenient observation about multiplication of the input. Recall that the product of two numbers is simply a notational convenience. Depending on your needs, the product can be regarded as either adding together copies of the number or copies of the number : If we take first interpretation of , then we can apply the formula for the sum of inputs times to get Similarly, if we take the second interpretation of , then we can apply the formula for the sum of inputs times to get    Properties of Exponential Functions   Assume and are real numbers.                            The Graph of the Exponential Function  The graph of the exponential function is provided below.   The graph of       "
},
{
  "id": "sec-exponentials-2-1",
  "level": "2",
  "url": "sec-exponentials.html#sec-exponentials-2-1",
  "type": "Paragraph (with a defined term)",
  "number": "",
  "title": "",
  "body": "transcendental function "
},
{
  "id": "def-euler_constant",
  "level": "2",
  "url": "sec-exponentials.html#def-euler_constant",
  "type": "Definition",
  "number": "6.1.1",
  "title": "Euler’s Number.",
  "body": " Euler's Number    Euler's number   Euler's Number  is the constant .   Euler's number     "
},
{
  "id": "def-natural_exponential",
  "level": "2",
  "url": "sec-exponentials.html#def-natural_exponential",
  "type": "Definition",
  "number": "6.1.2",
  "title": "The Exponential Function.",
  "body": " The Exponential Function   The exponential function   Function  Exponential   is defined by .   "
},
{
  "id": "thm-properties_exp",
  "level": "2",
  "url": "sec-exponentials.html#thm-properties_exp",
  "type": "Theorem",
  "number": "6.1.3",
  "title": "Properties of Exponential Functions.",
  "body": " Properties of Exponential Functions   Assume and are real numbers.                         "
},
{
  "id": "fig-graph_of_exp",
  "level": "2",
  "url": "sec-exponentials.html#fig-graph_of_exp",
  "type": "Figure",
  "number": "6.1.4",
  "title": "",
  "body": " The graph of     "
},
{
  "id": "sec-logarithms",
  "level": "1",
  "url": "sec-logarithms.html",
  "type": "Section",
  "number": "6.2",
  "title": "The Natural Logarithm",
  "body": " The Natural Logarithm   Looking at the graph of , it appears to satisfy .   The horizontal line test for      We can verify this algebraically as follows. Suppose the points and lie on the same horizontal line. These points must have the same -coordinates, so implies that and so . That is to say, the two points are the same point and so any horizontal line intersects the graph in at most one point. This tells us the exponential function is invertible.    Properties of the Natural Logarithm   The Natural Logarithm    The natural logarithm    The natural logarithm ,  Function  Logarithm  Natural   , is the inverse of .    As the composition inverse of , the logarithm inherits properties that are very similar to the . To describe these properties algebraically it is helpful to phrase the relationship between the exponential and the logarithm as pairing each real number with a positive real number via   Starting from the property , taking and in allows us to write We should note this algebraic fact fits with our geometric understanding. The graph of passes through the point . Since the graph of is the reflection of the graph of the exponential function across the line , the graph of the natural logarithm passes through the point .  If we introduce another real number, , then we obtain a second positive real number, . The function maps the sum of these numbers to the product of their pairs so the right-hand side of tells us that the logarithm pairs the product of positive real numbers with the sum of their pairs   Similarly, the function maps the difference of these numbers to the ratio of their pairs so the right-hand side of tells us that the logarithm pairs the ratio of positive real numbers with the difference of their pairs   Finally, we make the following observation as a convenience. If is any positive real number and is any real number, then we think of as the product of copies of the number  If we transform the log of the product into the sum of the logs times, then we obtain the expression   We summarize these properties below.   Properties of the Logarithm   Assume and are positive real numbers.                            The Graph of the Natural Logarithm  As the composition inverse, the graph of is obtained by reflecting the graph of across the line .   The graph of         Solving Equations with Transcendental Functions  Sometimes, equations arise that involve the exponential function or the natural logarithm. The general tactic for solving equations of this type is to combine the exponentials or logarithms using and , then use the relation as appropriate, to obtain an equation without exponentials or logarithms.    Solve the equation for .    Use the to rewrite Therefore there are two solutions to this equation: and .  We can check is a solution by substituting for on the left-hand side to get then on the right-hand side to get and observe they are the same.  Similarly, we can check is a solution by substituting for on the left-hand side to get then on the right-hand side to get and observe they are the same.      Solve the equation for     Use the to rewrite The two possible solutions are and . The solution is extraneous because is undefined. Therefore the only solution is .  We can verify this is a solution by substituting for to see      "
},
{
  "id": "fig-horizontal_line_test_exp",
  "level": "2",
  "url": "sec-logarithms.html#fig-horizontal_line_test_exp",
  "type": "Figure",
  "number": "6.2.1",
  "title": "",
  "body": " The horizontal line test for     "
},
{
  "id": "sec-logarithms-3-2",
  "level": "2",
  "url": "sec-logarithms.html#sec-logarithms-3-2",
  "type": "Definition",
  "number": "6.2.2",
  "title": "The Natural Logarithm.",
  "body": " The Natural Logarithm    The natural logarithm    The natural logarithm ,  Function  Logarithm  Natural   , is the inverse of .   "
},
{
  "id": "thm-properties_log",
  "level": "2",
  "url": "sec-logarithms.html#thm-properties_log",
  "type": "Theorem",
  "number": "6.2.3",
  "title": "Properties of the Logarithm.",
  "body": " Properties of the Logarithm   Assume and are positive real numbers.                         "
},
{
  "id": "fig-graph_log",
  "level": "2",
  "url": "sec-logarithms.html#fig-graph_log",
  "type": "Figure",
  "number": "6.2.4",
  "title": "",
  "body": " The graph of      "
},
{
  "id": "sec-logarithms-5-3",
  "level": "2",
  "url": "sec-logarithms.html#sec-logarithms-5-3",
  "type": "Example",
  "number": "6.2.5",
  "title": "",
  "body": "  Solve the equation for .    Use the to rewrite Therefore there are two solutions to this equation: and .  We can check is a solution by substituting for on the left-hand side to get then on the right-hand side to get and observe they are the same.  Similarly, we can check is a solution by substituting for on the left-hand side to get then on the right-hand side to get and observe they are the same.   "
},
{
  "id": "sec-logarithms-5-4",
  "level": "2",
  "url": "sec-logarithms.html#sec-logarithms-5-4",
  "type": "Example",
  "number": "6.2.6",
  "title": "",
  "body": "  Solve the equation for     Use the to rewrite The two possible solutions are and . The solution is extraneous because is undefined. Therefore the only solution is .  We can verify this is a solution by substituting for to see    "
},
{
  "id": "sec-other_exponentials",
  "level": "1",
  "url": "sec-other_exponentials.html",
  "type": "Section",
  "number": "6.3",
  "title": "Other Exponential Functions",
  "body": " Other Exponential Functions   The number is chosen for the exponential function specifically because it has nice analytic properties, which are the domain of calculus. Since these properties are beyond the scope of an algebra course, we focus only on the algebraic similarities between exponential functions with different bases.    Changing the Base of the Exponential  When we defined the exponential function , there was nothing algebraically interesting about using the number . We could just as well have chosen any other positive integer  we exclude simply because the constant function is rather boring. Had we chosen a different positive integer, we would have started from the following definition.    Assume is a fixed positive real number. The exponential function with base  Function  Exponential  is defined by .   Exponential function with base  The number is called the base   Function  Exponential  Base  of the exponential function.    At this point, you might be trying to reconcile in your mind how there could be more than one. The answer, thankfully, is there really is not a second exponential function. Since the natural logarithm is defined for all positive real numbers, we can rewrite so that with a little algebraic gymnastics,   To understand the function in general, we need to consider two cases. When , and so is simply a of , which we can see in    The graphs of the exponential functions with base , , , , , , and      When , and so is obtained from by a and a of .   The graphs of the exponential functions with base , , , , , , and        Properties of Exponential Functions  Unsurprisingly, all of the same properties enjoyed by are also enjoyed by .   We can use these properties to compare the effect of choosing a different base by measuring the relative change .    Let be a function that is defined on the interval . The relative change   Function  Relative Change  of on the interval is     Since the exponential functions are defined for all real numbers, we can consider any interval of unit length by taking a number as the left endpoint and as the right endpoint. Over this interval, the relative change is     Assume is a positive number. The number is called the growth rate   Function  Exponential  Growth Rate  of if or the decay rate   Function  Exponential  Decay Rate  of if .   When , we say the function models exponential growth   Function  Exponential  Growth  and we call the number the growth factor .  Function  Exponential  Growth Factor      When , we say the function models exponential decay   Function  Exponential  Decay  and we call the number the decay factor .  Function  Exponential  Decay Factor          "
},
{
  "id": "def-exponential_function",
  "level": "2",
  "url": "sec-other_exponentials.html#def-exponential_function",
  "type": "Definition",
  "number": "6.3.1",
  "title": "",
  "body": "  Assume is a fixed positive real number. The exponential function with base  Function  Exponential  is defined by .   Exponential function with base  The number is called the base   Function  Exponential  Base  of the exponential function.   "
},
{
  "id": "fig-exponential_growth",
  "level": "2",
  "url": "sec-other_exponentials.html#fig-exponential_growth",
  "type": "Figure",
  "number": "6.3.2",
  "title": "",
  "body": " The graphs of the exponential functions with base , , , , , , and     "
},
{
  "id": "fig-exponential_decay",
  "level": "2",
  "url": "sec-other_exponentials.html#fig-exponential_decay",
  "type": "Figure",
  "number": "6.3.3",
  "title": "",
  "body": " The graphs of the exponential functions with base , , , , , , and     "
},
{
  "id": "sec-other_exponentials-4-4",
  "level": "2",
  "url": "sec-other_exponentials.html#sec-other_exponentials-4-4",
  "type": "Definition",
  "number": "6.3.4",
  "title": "",
  "body": "  Let be a function that is defined on the interval . The relative change   Function  Relative Change  of on the interval is    "
},
{
  "id": "def-exp_unit_relative_change",
  "level": "2",
  "url": "sec-other_exponentials.html#def-exp_unit_relative_change",
  "type": "Definition",
  "number": "6.3.5",
  "title": "",
  "body": "  Assume is a positive number. The number is called the growth rate   Function  Exponential  Growth Rate  of if or the decay rate   Function  Exponential  Decay Rate  of if .   When , we say the function models exponential growth   Function  Exponential  Growth  and we call the number the growth factor .  Function  Exponential  Growth Factor      When , we say the function models exponential decay   Function  Exponential  Decay  and we call the number the decay factor .  Function  Exponential  Decay Factor        "
},
{
  "id": "sec-other_logarithms",
  "level": "1",
  "url": "sec-other_logarithms.html",
  "type": "Section",
  "number": "6.4",
  "title": "Other Logarithmic Functions",
  "body": " Other Logarithmic Functions   Just as there is essentially only one exponential function, it should come as no surprise that there is essentially only one logarithm. We can regard the exponential function with base as the composition The condition guarantees that and thus we may invert using the division by function By , the inverse of the exponential with base is the function defined by     Changing the Base of the Logarithm   The Logarithm with Base   Assume is a positive real number. The logarithm with base ,  Function  Logarithm  Base  is the function ,   The logarithm with base  defined by   In particular, for every real number and every positive real number ,     Our understanding of the natural logarithm and graph transformations allows us to very quickly visualize the logarithm with base . Just as for exponentials, there are two cases: and . When , and so the graph of is obtained as a vertical scaling of by . We have plotted the logarithm for several bases in .   The graphs of the logarithms with base , , , , , , and      When , , and so the graph of is obtained by vertically scaling by and reflecting across the -axis. We have plotted the logarithm for several bases in .   The graphs of the logarithms with base , , , , , , and      Explicitly defining the logarithm with base in terms of the natural logarithm also allows us a simple way to convert between logarithms with different bases. Assume and are both positive numbers. Multiplying both sides of the equation by the number allows us to write We can substitute this for in the definition of the logarithm base to produce It is often convenient to involve only two bases in this expression, so we rewrite    Base Change for Logarithms   Assume and are positive real numbers. For all positive real numbers ,       The logarithm often written  means different things to different people, often depending on the context.   Most mathematicians (and mathematical texts) will write to mean the logarithm with base . This is because mathematicians are primarily interested in the functions and their behaviors, not numbers or numerical data.    Most computer scientists will write to mean the logarithm with base . This is because computer scientists most frequently work with numbers and numerical data expressed in base or binary  the number system used for computational devices. In base , numbers are represented as strings with digits that are either or . For example, in base the string stands for the number     Most scientists and engineers will write to mean the logarithm with base . This is because scientists and engineers most frequently work with numbers and numerical data expressed in the usual base 10 or decimal number system. In contrast to base , the base 10 number system consists of strings of digits that are allowed to be one of , , , , , , , , , or . For example, in base the string stands for        "
},
{
  "id": "def-log_base_a",
  "level": "2",
  "url": "sec-other_logarithms.html#def-log_base_a",
  "type": "Definition",
  "number": "6.4.1",
  "title": "The Logarithm with Base <span class=\"process-math\">\\(a\\)<\/span>.",
  "body": " The Logarithm with Base   Assume is a positive real number. The logarithm with base ,  Function  Logarithm  Base  is the function ,   The logarithm with base  defined by   In particular, for every real number and every positive real number ,    "
},
{
  "id": "fig-refl_exponential_growth",
  "level": "2",
  "url": "sec-other_logarithms.html#fig-refl_exponential_growth",
  "type": "Figure",
  "number": "6.4.2",
  "title": "",
  "body": " The graphs of the logarithms with base , , , , , , and     "
},
{
  "id": "fig-refl_exponential_decay",
  "level": "2",
  "url": "sec-other_logarithms.html#fig-refl_exponential_decay",
  "type": "Figure",
  "number": "6.4.3",
  "title": "",
  "body": " The graphs of the logarithms with base , , , , , , and     "
},
{
  "id": "formula-base_change",
  "level": "2",
  "url": "sec-other_logarithms.html#formula-base_change",
  "type": "Formula",
  "number": "6.4.4",
  "title": "Base Change for Logarithms.",
  "body": " Base Change for Logarithms   Assume and are positive real numbers. For all positive real numbers ,    "
},
{
  "id": "sec-other_logarithms-3-9",
  "level": "2",
  "url": "sec-other_logarithms.html#sec-other_logarithms-3-9",
  "type": "Remark",
  "number": "6.4.5",
  "title": "",
  "body": "  The logarithm often written  means different things to different people, often depending on the context.   Most mathematicians (and mathematical texts) will write to mean the logarithm with base . This is because mathematicians are primarily interested in the functions and their behaviors, not numbers or numerical data.    Most computer scientists will write to mean the logarithm with base . This is because computer scientists most frequently work with numbers and numerical data expressed in base or binary  the number system used for computational devices. In base , numbers are represented as strings with digits that are either or . For example, in base the string stands for the number     Most scientists and engineers will write to mean the logarithm with base . This is because scientists and engineers most frequently work with numbers and numerical data expressed in the usual base 10 or decimal number system. In contrast to base , the base 10 number system consists of strings of digits that are allowed to be one of , , , , , , , , , or . For example, in base the string stands for      "
},
{
  "id": "sec-modeling",
  "level": "1",
  "url": "sec-modeling.html",
  "type": "Section",
  "number": "6.5",
  "title": "Modeling with Exponential Functions",
  "body": " Modeling with Exponential Functions   Exponential functions are of interest to scientists because they are useful in modeling natural phenomena. In this section, we explore some examples that demonstrate how exponential functions can be used for modeling.    Exponential Growth   Population Growth  A biologist observes a population over a six year period. The biologist measures the size of the observed population at the beginning and end of each of the years. In an effort to understand how the population is changing, the biologist records the year-to-year change as a numeric value and as a percentage of the initial population for the year.   Observed Population by Year    Year  Initial Population  Final Population  Change  Percent Change                                               Using the table, the biologist notices the following relations amongst the population sizes This leads the biologist to conclude that the size of the population can be measured with the exponential function where is the amount of time in years that has elapsed. This function agrees with the observations for , and predicts the size of the population at the end of the seventh year will be     Compound Interest  Your local bank offers a savings account with a annual interest that is compounded monthly. This means the bank will add of your current balance to your account every month. In other words, your balance grows at a rate of  per month .  The growth factor for the exponential function that models the amount of money in the account after  months is Assuming you deposit into a savings account, the balance of the account after  months is given by the function   Customarily, one measures investments as a function of the number of years that have elapsed, rather than months. Since there are months in a year, we compress the time scale by a factor of to obtain the function that measures the amount of money in the account after  years .  The table below shows the amount of money in the account for a five year period, with all figures rounded to two decimal places.   Amount of Money in Savings Account    Year  Initial Amount ( )  Final Amount ( )  Change ( )  Growth Rate (Annual)                                        Note that the growth factor for this function is , so the growth rate is slightly higher than the interest rate ( ).   In general, we can model compound interest using the following formula.   Compound Interest Formula   Assume dollars are invested in an account at an annual interest rate of that is compounded times each year. The amount of money in the account after years is The growth rate for this function is which measures the increase in the balance over one year as a percentage of the previous balance.    For interest that compounds continuously , we have the following formula.   Continuously Compounding Interest Formula   Assume dollars are invested in an account at an annual interest rate of that is compounded continuously . The amount of money in the account after years is The growth rate for this function is , which measures the increase in the balance over one year as a percentage of the previous balance.     We can always express compounding interest as continuously compounding interest using the logarithm.    Converting to Continuously Compounding Interest   As we saw in , we can model the balance of a savings account with principal investment of at an annual interest rate of compounded monthly with the function Since the growth factor of this function is , we have and thus we can rewrite with base as       Exponential Decay   Half-Life  The half-life of the radioactive isotope technetium-99m is hours . Assume we start with a sample of grams of technetium-99m. The table below lists the amount at the beginning and the end of each six hour period over the course of a day.   Amount of technetium-99m over 24 hours    Period  Initial Amount (grams)  Final Amount (grams)  Change (grams)  Percent Change                                 We can model the amount of the sample remaining as a function of the number of hour periods that have passed using the exponential function However, it would be more convenient to model the amount of the sample as a function of the number of hours that have passed. To do this, we first recognize that hour is of a period. We can stretch the time scale by a factor of to obtain the function that measures the amount of the technetium-99m sample remaining after hours have elapsed. Using this function, we have recorded the amount remaining after each hour for the first six hour period in the table below.   Amount of technetium-99m over 24 hours    Hour  Amount Remaining (grams)  Percent Change                                     "
},
{
  "id": "example-exp_growth",
  "level": "2",
  "url": "sec-modeling.html#example-exp_growth",
  "type": "Example",
  "number": "6.5.1",
  "title": "Population Growth.",
  "body": " Population Growth  A biologist observes a population over a six year period. The biologist measures the size of the observed population at the beginning and end of each of the years. In an effort to understand how the population is changing, the biologist records the year-to-year change as a numeric value and as a percentage of the initial population for the year.   Observed Population by Year    Year  Initial Population  Final Population  Change  Percent Change                                               Using the table, the biologist notices the following relations amongst the population sizes This leads the biologist to conclude that the size of the population can be measured with the exponential function where is the amount of time in years that has elapsed. This function agrees with the observations for , and predicts the size of the population at the end of the seventh year will be   "
},
{
  "id": "example-compound_interest",
  "level": "2",
  "url": "sec-modeling.html#example-compound_interest",
  "type": "Example",
  "number": "6.5.3",
  "title": "Compound Interest.",
  "body": " Compound Interest  Your local bank offers a savings account with a annual interest that is compounded monthly. This means the bank will add of your current balance to your account every month. In other words, your balance grows at a rate of  per month .  The growth factor for the exponential function that models the amount of money in the account after  months is Assuming you deposit into a savings account, the balance of the account after  months is given by the function   Customarily, one measures investments as a function of the number of years that have elapsed, rather than months. Since there are months in a year, we compress the time scale by a factor of to obtain the function that measures the amount of money in the account after  years .  The table below shows the amount of money in the account for a five year period, with all figures rounded to two decimal places.   Amount of Money in Savings Account    Year  Initial Amount ( )  Final Amount ( )  Change ( )  Growth Rate (Annual)                                        Note that the growth factor for this function is , so the growth rate is slightly higher than the interest rate ( ).  "
},
{
  "id": "formula-compound_interest",
  "level": "2",
  "url": "sec-modeling.html#formula-compound_interest",
  "type": "Formula",
  "number": "6.5.5",
  "title": "Compound Interest Formula.",
  "body": " Compound Interest Formula   Assume dollars are invested in an account at an annual interest rate of that is compounded times each year. The amount of money in the account after years is The growth rate for this function is which measures the increase in the balance over one year as a percentage of the previous balance.   "
},
{
  "id": "formula-cont_compound_interest",
  "level": "2",
  "url": "sec-modeling.html#formula-cont_compound_interest",
  "type": "Formula",
  "number": "6.5.6",
  "title": "Continuously Compounding Interest Formula.",
  "body": " Continuously Compounding Interest Formula   Assume dollars are invested in an account at an annual interest rate of that is compounded continuously . The amount of money in the account after years is The growth rate for this function is , which measures the increase in the balance over one year as a percentage of the previous balance.   "
},
{
  "id": "sec-modeling-3-8",
  "level": "2",
  "url": "sec-modeling.html#sec-modeling-3-8",
  "type": "Remark",
  "number": "6.5.7",
  "title": "",
  "body": " We can always express compounding interest as continuously compounding interest using the logarithm.  "
},
{
  "id": "sec-modeling-3-9",
  "level": "2",
  "url": "sec-modeling.html#sec-modeling-3-9",
  "type": "Example",
  "number": "6.5.8",
  "title": "Converting to Continuously Compounding Interest.",
  "body": " Converting to Continuously Compounding Interest   As we saw in , we can model the balance of a savings account with principal investment of at an annual interest rate of compounded monthly with the function Since the growth factor of this function is , we have and thus we can rewrite with base as    "
},
{
  "id": "example-exp_decay",
  "level": "2",
  "url": "sec-modeling.html#example-exp_decay",
  "type": "Example",
  "number": "6.5.9",
  "title": "Half-Life.",
  "body": " Half-Life  The half-life of the radioactive isotope technetium-99m is hours . Assume we start with a sample of grams of technetium-99m. The table below lists the amount at the beginning and the end of each six hour period over the course of a day.   Amount of technetium-99m over 24 hours    Period  Initial Amount (grams)  Final Amount (grams)  Change (grams)  Percent Change                                 We can model the amount of the sample remaining as a function of the number of hour periods that have passed using the exponential function However, it would be more convenient to model the amount of the sample as a function of the number of hours that have passed. To do this, we first recognize that hour is of a period. We can stretch the time scale by a factor of to obtain the function that measures the amount of the technetium-99m sample remaining after hours have elapsed. Using this function, we have recorded the amount remaining after each hour for the first six hour period in the table below.   Amount of technetium-99m over 24 hours    Hour  Amount Remaining (grams)  Percent Change                                   "
},
{
  "id": "meta_backmatter-2",
  "level": "1",
  "url": "meta_backmatter-2.html",
  "type": "Appendix",
  "number": "A",
  "title": "List of Symbols",
  "body": " List of Symbols   "
},
{
  "id": "meta_backmatter-3-2",
  "level": "1",
  "url": "meta_backmatter-3-2.html",
  "type": "Subsection",
  "number": "B.1",
  "title": "Polynomials",
  "body": " Polynomials   The graph of .       The graph of .       the graph of  The graph of .       The graph of .       The graph of .      "
},
{
  "id": "fig-line",
  "level": "2",
  "url": "meta_backmatter-3-2.html#fig-line",
  "type": "Figure",
  "number": "B.1.12",
  "title": "",
  "body": " The graph of .     "
},
{
  "id": "fig-parabola",
  "level": "2",
  "url": "meta_backmatter-3-2.html#fig-parabola",
  "type": "Figure",
  "number": "B.1.13",
  "title": "",
  "body": " The graph of .     "
},
{
  "id": "fig-cubic",
  "level": "2",
  "url": "meta_backmatter-3-2.html#fig-cubic",
  "type": "Figure",
  "number": "B.1.14",
  "title": "the graph of <span class=\"process-math\">\\(y = x^3\\)<\/span>",
  "body": " the graph of  The graph of .     "
},
{
  "id": "fig-quartic",
  "level": "2",
  "url": "meta_backmatter-3-2.html#fig-quartic",
  "type": "Figure",
  "number": "B.1.15",
  "title": "",
  "body": " The graph of .     "
},
{
  "id": "fig-quintic",
  "level": "2",
  "url": "meta_backmatter-3-2.html#fig-quintic",
  "type": "Figure",
  "number": "B.1.16",
  "title": "",
  "body": " The graph of .     "
},
{
  "id": "meta_backmatter-3-3",
  "level": "1",
  "url": "meta_backmatter-3-3.html",
  "type": "Subsection",
  "number": "B.2",
  "title": "Roots",
  "body": " Roots   The graph of .       The graph of .       The graph of .       The graph of .      "
},
{
  "id": "fig-sq_root",
  "level": "2",
  "url": "meta_backmatter-3-3.html#fig-sq_root",
  "type": "Figure",
  "number": "B.2.17",
  "title": "",
  "body": " The graph of .     "
},
{
  "id": "fig-cube_root",
  "level": "2",
  "url": "meta_backmatter-3-3.html#fig-cube_root",
  "type": "Figure",
  "number": "B.2.18",
  "title": "",
  "body": " The graph of .     "
},
{
  "id": "fig-fourth_root",
  "level": "2",
  "url": "meta_backmatter-3-3.html#fig-fourth_root",
  "type": "Figure",
  "number": "B.2.19",
  "title": "",
  "body": " The graph of .     "
},
{
  "id": "fig-fifth_root",
  "level": "2",
  "url": "meta_backmatter-3-3.html#fig-fifth_root",
  "type": "Figure",
  "number": "B.2.20",
  "title": "",
  "body": " The graph of .     "
},
{
  "id": "meta_backmatter-3-4",
  "level": "1",
  "url": "meta_backmatter-3-4.html",
  "type": "Subsection",
  "number": "B.3",
  "title": "Rational Functions",
  "body": " Rational Functions   The graph of .       The graph of .       The graph of .       The graph of .       The graph of .      "
},
{
  "id": "fig-1_x",
  "level": "2",
  "url": "meta_backmatter-3-4.html#fig-1_x",
  "type": "Figure",
  "number": "B.3.21",
  "title": "",
  "body": " The graph of .     "
},
{
  "id": "fig-1_x_2",
  "level": "2",
  "url": "meta_backmatter-3-4.html#fig-1_x_2",
  "type": "Figure",
  "number": "B.3.22",
  "title": "",
  "body": " The graph of .     "
},
{
  "id": "fig-1_x_3",
  "level": "2",
  "url": "meta_backmatter-3-4.html#fig-1_x_3",
  "type": "Figure",
  "number": "B.3.23",
  "title": "",
  "body": " The graph of .     "
},
{
  "id": "fig-1_x_4",
  "level": "2",
  "url": "meta_backmatter-3-4.html#fig-1_x_4",
  "type": "Figure",
  "number": "B.3.24",
  "title": "",
  "body": " The graph of .     "
},
{
  "id": "fig-1_x_5",
  "level": "2",
  "url": "meta_backmatter-3-4.html#fig-1_x_5",
  "type": "Figure",
  "number": "B.3.25",
  "title": "",
  "body": " The graph of .     "
},
{
  "id": "meta_backmatter-3-5",
  "level": "1",
  "url": "meta_backmatter-3-5.html",
  "type": "Subsection",
  "number": "B.4",
  "title": "Miscellaneous Functions",
  "body": " Miscellaneous Functions   The graph of .      "
},
{
  "id": "fig-abs_val",
  "level": "2",
  "url": "meta_backmatter-3-5.html#fig-abs_val",
  "type": "Figure",
  "number": "B.4.26",
  "title": "",
  "body": " The graph of .     "
},
{
  "id": "meta_backmatter-4",
  "level": "1",
  "url": "meta_backmatter-4.html",
  "type": "References",
  "number": "",
  "title": "References",
  "body": "  Centers for Disease Control  What is Radiation? Properties of Radioactive Isotopes  https:\/\/www.cdc.gov\/nceh\/radiation\/isotopes.html#halflife  August 10, 2015  2023-12-13   "
},
{
  "id": "meta_backmatter-5",
  "level": "1",
  "url": "meta_backmatter-5.html",
  "type": "Glossary",
  "number": "",
  "title": "Glossary",
  "body": " "
},
{
  "id": "meta_backmatter-6",
  "level": "1",
  "url": "meta_backmatter-6.html",
  "type": "Index",
  "number": "",
  "title": "Index",
  "body": " Index   "
},
{
  "id": "meta_backmatter-7",
  "level": "1",
  "url": "meta_backmatter-7.html",
  "type": "Colophon",
  "number": "",
  "title": "Colophon",
  "body": " This book was authored in PreTeXt .  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
