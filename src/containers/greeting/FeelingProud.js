import React, { Component } from "react";

class FeelingProud extends Component {
  render() {
    //const theme = this.props.theme;
    return (
      /*<svg version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="478.000000pt" height="991.000000pt" viewBox="0 0 478.000000 991.000000"
 preserveAspectRatio="xMidYMid meet">
<metadata>
Created by potrace 1.16, written by Peter Selinger 2001-2019
</metadata>
<g transform="translate(0.000000,991.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M2370 8191 c-8 -6 -18 -7 -22 -5 -4 3 -8 -2 -8 -10 0 -9 -5 -16 -11
-16 -6 0 -9 7 -5 15 8 22 3 19 -40 -21 l-39 -35 -12 38 c-11 37 -11 37 -12 8
-2 -50 -12 -73 -34 -79 -28 -7 -31 -2 -15 23 11 18 11 23 -2 31 -8 5 -17 6
-20 3 -3 -3 1 -8 8 -10 19 -7 14 -25 -6 -19 -12 4 -28 -5 -48 -27 -36 -37
-111 -80 -119 -67 -3 4 -2 16 2 26 9 25 -11 16 -102 -46 -41 -27 -78 -50 -83
-50 -5 0 -15 -7 -22 -15 -7 -8 -16 -12 -21 -9 -5 3 -9 1 -9 -5 0 -13 -51 -40
-67 -34 -18 7 -26 -16 -11 -34 11 -15 11 -16 -5 -10 -10 4 -20 7 -23 7 -2 0 0
8 3 17 6 15 5 16 -9 3 -14 -12 -14 -17 -4 -25 11 -8 9 -13 -10 -22 -13 -6 -24
-7 -24 -2 0 5 -5 9 -11 9 -8 0 -8 -4 1 -15 18 -21 2 -38 -31 -31 -21 4 -29 2
-29 -9 0 -9 -6 -12 -16 -8 -9 3 -19 1 -23 -5 -3 -6 -22 -14 -41 -17 -19 -3
-42 -14 -52 -25 -9 -11 -22 -18 -30 -15 -7 3 -35 -15 -62 -40 -46 -42 -59 -49
-79 -46 -16 2 -73 -35 -69 -47 2 -7 -7 -12 -25 -12 -36 -1 -67 -24 -60 -45 4
-9 1 -15 -7 -15 -8 0 -18 -12 -24 -27 -5 -16 -18 -37 -28 -48 -11 -11 -32 -38
-49 -60 -16 -22 -48 -58 -70 -80 -22 -22 -62 -68 -88 -102 -26 -34 -57 -69
-70 -78 -12 -8 -17 -15 -12 -15 5 0 4 -5 -3 -12 -7 -7 -12 -18 -12 -25 0 -8
-28 -42 -62 -76 -34 -34 -59 -54 -55 -44 9 25 -6 21 -22 -5 -7 -13 -10 -20 -6
-15 8 7 45 -20 45 -33 0 -3 -16 -6 -35 -6 -23 0 -35 5 -35 13 0 11 -6 9 -25
-4 -29 -21 -61 -113 -48 -137 5 -8 6 -35 4 -58 l-5 -43 -7 40 c-6 32 -7 26 -5
-25 2 -36 -2 -83 -7 -105 -12 -50 -10 -129 3 -133 6 -2 10 -17 10 -32 0 -16 7
-33 16 -38 15 -8 15 -10 0 -15 -17 -7 -22 -37 -6 -37 5 0 13 7 18 16 7 13 10
8 15 -22 8 -45 1 -57 -12 -23 l-10 24 -6 -22 c-4 -13 -12 -20 -21 -16 -9 3
-14 -2 -14 -15 0 -24 16 -38 23 -20 2 7 4 0 4 -17 -1 -16 3 -48 8 -70 7 -37 7
-39 -9 -26 -9 8 -19 11 -23 7 -4 -3 2 -13 13 -21 16 -12 17 -16 5 -24 -17 -11
-7 -41 14 -41 8 0 15 -4 15 -10 0 -5 -4 -10 -10 -10 -5 0 -10 -6 -10 -14 0
-10 -7 -12 -22 -9 -23 5 -23 5 -3 -10 15 -12 16 -16 5 -17 -25 0 -52 -75 -33
-93 3 -4 7 -26 9 -49 1 -24 4 -52 7 -63 3 -11 8 -33 12 -48 5 -20 2 -33 -10
-47 -10 -11 -15 -23 -11 -27 4 -4 11 -2 15 5 4 7 17 14 29 17 19 3 22 -1 23
-33 1 -33 2 -34 9 -12 7 23 8 23 9 4 1 -21 28 -41 39 -29 3 3 0 5 -6 5 -7 0
-12 10 -12 22 0 16 3 19 11 11 9 -9 18 -8 36 4 18 12 27 13 36 4 8 -8 5 -11
-14 -11 l-24 0 28 -24 c32 -28 34 -36 7 -36 -11 0 -20 5 -20 10 0 6 -4 10 -9
10 -4 0 -6 -11 -3 -25 2 -14 9 -25 16 -24 37 4 44 -25 8 -34 -10 -3 -5 -5 11
-6 27 -1 41 -31 15 -31 -8 -1 -6 -6 5 -14 14 -11 15 -15 4 -25 -8 -6 -17 -9
-20 -6 -4 3 -5 3 -3 -1 2 -3 -2 -24 -9 -48 -12 -38 -11 -47 6 -82 13 -27 18
-31 14 -14 -2 14 0 32 6 40 8 11 9 1 6 -34 -3 -28 -1 -60 4 -73 6 -15 4 -27
-5 -36 -10 -10 -13 -32 -9 -78 3 -46 0 -72 -11 -94 -18 -34 -21 -59 -6 -50 6
4 10 -17 10 -54 l0 -61 55 0 c30 0 55 -4 55 -10 0 -5 9 -10 21 -10 11 0 17 4
14 10 -4 6 -1 17 5 25 6 8 8 19 4 26 -15 25 -18 470 -4 569 13 90 50 253 56
247 3 -3 13 -40 24 -83 53 -221 122 -280 379 -328 132 -25 484 -19 625 10 24
5 28 3 23 -10 -17 -45 51 8 110 86 23 29 61 102 86 161 73 174 129 247 188
247 44 0 75 -19 97 -59 26 -46 51 -174 45 -228 -3 -24 -1 -43 4 -43 5 0 14
-21 21 -47 8 -27 20 -63 28 -81 8 -18 14 -42 14 -53 0 -11 10 -30 23 -42 19
-20 21 -30 17 -76 -4 -31 -12 -58 -21 -65 -9 -6 -21 -21 -28 -34 -6 -12 -34
-33 -61 -47 -27 -13 -51 -29 -55 -35 -3 -5 -14 -10 -24 -10 -10 0 -25 -8 -34
-18 -9 -10 -38 -29 -64 -42 -60 -29 -60 -29 -43 -40 8 -5 11 -12 7 -16 -4 -4
-17 5 -29 21 -26 34 -111 75 -156 75 -67 0 -169 -69 -155 -106 13 -34 95 -45
156 -19 67 28 167 13 175 -26 3 -19 -17 -26 -75 -24 -29 0 -39 -3 -33 -10 14
-17 -24 -46 -40 -32 -10 9 -11 9 -6 0 9 -15 -10 -18 -19 -3 -10 16 -25 1 -25
-24 0 -14 -10 -28 -25 -36 -14 -7 -25 -17 -25 -22 0 -4 -4 -8 -9 -8 -5 0 -7
10 -5 23 l5 22 -17 -22 c-9 -13 -23 -23 -31 -23 -7 0 -17 -8 -20 -17 -12 -31
-30 -45 -37 -28 -3 8 -1 17 4 20 5 3 8 14 7 25 -1 10 -5 16 -9 14 -5 -3 -6 -9
-3 -14 3 -5 -9 -22 -26 -40 -17 -17 -29 -24 -26 -16 9 22 -7 28 -29 12 -13
-10 -23 -11 -35 -3 -13 8 -22 7 -33 -2 -14 -11 -16 -11 -16 4 0 15 -8 16 -65
10 -70 -8 -85 -1 -32 14 l32 9 -31 1 c-19 1 -38 -7 -50 -20 -12 -14 -25 -18
-41 -14 -26 6 -62 -9 -81 -36 -7 -10 -19 -16 -27 -13 -9 4 -15 0 -15 -10 0 -9
-7 -16 -15 -16 -17 0 -17 -30 0 -42 6 -5 4 -12 -5 -18 -13 -8 -12 -10 3 -10
10 0 15 -5 12 -10 -4 -6 -1 -17 5 -25 7 -8 9 -15 4 -15 -5 0 -1 -7 9 -14 10
-8 17 -18 16 -22 -6 -37 47 -69 99 -59 20 4 43 11 49 17 7 6 20 8 28 4 9 -3
14 -2 11 3 -3 5 15 14 39 20 37 9 51 9 75 -4 31 -16 56 -12 44 7 -4 7 5 7 27
2 19 -5 59 -7 89 -6 33 1 50 -1 42 -6 -8 -6 3 -9 30 -10 37 0 138 -7 243 -16
17 -1 56 -3 88 -4 34 -1 57 -6 57 -13 0 -6 -9 -9 -20 -6 -11 3 -20 1 -20 -4 0
-5 7 -9 15 -9 8 0 15 -4 15 -10 0 -5 7 -10 15 -10 9 0 12 -6 8 -16 -4 -12 -8
-12 -13 -4 -6 9 -10 6 -14 -8 -5 -14 -19 -22 -48 -27 -34 -6 -39 -9 -27 -19 9
-6 19 -23 23 -38 6 -25 3 -28 -17 -28 -13 0 -27 -4 -33 -9 -14 -14 -52 -16
-112 -7 -39 6 -57 5 -69 -6 -13 -10 -17 -10 -20 0 -5 13 -43 17 -43 4 0 -4 5
-13 11 -19 8 -8 8 -13 0 -17 -6 -4 -11 -3 -11 2 0 6 -9 8 -20 5 -11 -3 -20 -6
-20 -7 0 -1 4 -16 9 -33 6 -20 6 -35 0 -38 -12 -8 -12 -45 1 -45 6 0 10 -7 10
-15 0 -10 16 -16 50 -21 28 -4 50 -10 50 -15 0 -5 9 -9 19 -9 11 0 26 -6 33
-13 7 -8 23 -12 36 -11 12 2 21 1 20 -4 -3 -12 26 -66 39 -75 7 -4 13 -15 13
-23 0 -8 -4 -12 -10 -9 -5 3 -10 -3 -10 -13 0 -26 -37 -36 -50 -14 -8 15 -9
15 -10 -1 0 -11 -9 -32 -21 -48 -16 -22 -24 -27 -34 -19 -13 10 -48 3 -41 -9
2 -3 -5 -15 -15 -25 -19 -19 -19 -19 -19 2 0 12 -4 22 -10 22 -5 0 -10 -6 -10
-14 0 -8 -7 -17 -16 -20 -8 -3 -12 -2 -9 4 4 6 3 20 0 31 -7 21 -7 21 -32 -3
l-26 -23 6 23 c7 29 -1 29 -13 0 -7 -18 -9 -19 -9 -5 -1 28 -34 19 -58 -16
-21 -29 -23 -30 -23 -9 0 34 -14 26 -29 -15 -13 -34 -15 -35 -27 -18 -13 18
-14 18 -15 -6 -1 -17 -3 -19 -6 -6 -2 9 -9 15 -14 12 -5 -4 -9 1 -9 9 0 9 -5
16 -11 16 -5 0 -9 -8 -8 -17 3 -33 -1 -36 -22 -17 -12 10 -23 14 -27 9 -11
-16 -52 -16 -52 -1 0 8 -9 18 -20 21 -11 3 -20 13 -20 20 0 8 -9 19 -21 25
-19 10 -20 10 -10 -9 6 -11 11 -37 11 -58 -1 -32 -2 -35 -11 -20 -6 10 -9 27
-6 38 3 10 -1 22 -7 27 -7 4 -15 14 -18 22 -6 16 -8 12 -23 -36 -7 -21 -25 -8
-25 19 -1 24 -29 81 -30 59 0 -7 -5 -10 -10 -7 -10 6 -15 -15 -10 -44 1 -10
-5 -12 -22 -7 -13 3 -26 6 -30 6 -15 0 -8 20 7 20 8 0 15 7 15 16 0 14 -3 14
-15 4 -12 -10 -18 -10 -30 0 -13 10 -15 9 -15 -9 0 -11 -4 -21 -10 -21 -5 0
-10 8 -10 18 0 10 -14 31 -30 47 -31 30 -41 23 -15 -11 8 -10 15 -27 15 -37 0
-10 4 -16 9 -12 11 6 25 -30 17 -43 -3 -5 6 -14 20 -21 14 -6 22 -16 19 -21
-4 -6 -11 -8 -16 -5 -5 4 -9 1 -9 -4 0 -6 7 -11 14 -11 8 0 34 -23 58 -51 24
-28 49 -56 56 -63 65 -56 74 -68 61 -76 -10 -7 -6 -12 14 -19 16 -6 32 -11 37
-11 5 0 12 -9 15 -21 4 -11 18 -24 31 -29 17 -7 24 -18 25 -37 1 -17 3 -21 6
-10 2 9 8 17 11 17 17 -1 52 -40 52 -59 0 -12 5 -21 10 -21 6 0 10 -7 10 -16
0 -9 8 -23 18 -31 12 -10 14 -16 5 -19 -21 -9 -15 -31 14 -52 23 -16 25 -22
15 -35 -11 -12 -8 -16 17 -25 19 -7 32 -7 39 0 6 6 16 8 24 5 8 -3 3 -9 -14
-16 -16 -6 -28 -15 -28 -21 0 -14 27 -12 33 3 3 6 6 2 6 -10 1 -13 7 -23 16
-23 8 0 15 -8 15 -19 0 -12 12 -24 33 -32 17 -7 41 -21 51 -31 11 -10 32 -18
47 -18 15 0 31 -4 34 -10 4 -6 -5 -10 -19 -10 -34 0 -34 -27 -1 -40 23 -9 35
-30 17 -30 -4 0 -6 -20 -4 -45 4 -39 2 -45 -16 -45 -11 0 -22 8 -25 20 -3 11
-13 20 -22 20 -12 0 -16 -6 -12 -20 3 -13 0 -20 -9 -20 -8 0 -14 4 -14 10 0
16 -72 57 -114 65 -29 5 -36 9 -25 16 8 5 11 9 7 10 -5 1 -11 2 -15 3 -21 4
-33 19 -28 35 3 11 0 18 -9 18 -8 0 -12 -6 -9 -14 5 -14 -14 -17 -41 -7 -9 3
-12 12 -8 22 5 15 3 15 -11 4 -9 -8 -22 -12 -29 -9 -8 4 -7 6 5 6 9 1 17 6 17
11 0 10 -18 14 -50 12 -16 -1 -57 19 -115 57 -22 14 -42 26 -45 26 -8 0 -103
57 -133 79 -100 74 -167 158 -167 209 0 14 -5 38 -12 52 -9 19 -9 67 0 202 7
97 10 178 8 180 -9 10 -76 -11 -96 -29 -12 -11 -24 -17 -27 -14 -3 3 -18 -1
-34 -9 -15 -8 -37 -15 -48 -15 -11 0 -32 -13 -48 -28 -15 -16 -50 -37 -78 -47
-27 -11 -58 -28 -67 -38 -9 -10 -22 -16 -27 -12 -6 3 -11 2 -11 -3 0 -5 -15
-13 -32 -17 l-33 -8 30 -7 c28 -7 28 -8 -11 -9 -24 0 -47 -8 -54 -16 -7 -9
-19 -14 -27 -11 -8 3 -12 2 -9 -2 3 -5 -11 -14 -30 -21 -19 -7 -34 -19 -34
-28 0 -12 -7 -14 -30 -10 -21 5 -29 3 -27 -6 3 -17 -32 -9 -64 14 -30 21 -44
25 -34 9 8 -13 -37 -8 -48 5 -5 6 -6 2 -3 -9 4 -11 3 -22 -2 -25 -5 -3 -11
-32 -14 -64 -4 -44 -1 -60 10 -66 13 -7 13 -12 -1 -41 -20 -39 -16 -49 17 -43
24 5 25 4 13 -26 -7 -20 -14 -26 -19 -18 -11 18 -10 -1 2 -23 6 -12 17 -16 30
-13 17 5 20 0 20 -26 0 -35 -7 -39 -26 -13 -12 15 -13 15 -7 -5 8 -33 30 -48
47 -34 19 16 28 -1 20 -34 -6 -24 -7 -24 -20 -8 -12 16 -13 16 -14 1 0 -37 11
-49 45 -42 31 5 32 5 27 -25 -4 -31 -22 -44 -22 -16 0 8 -4 15 -10 15 -5 0 -7
-7 -4 -15 4 -9 1 -15 -7 -15 -7 0 -4 -7 8 -15 15 -10 32 -13 49 -9 25 6 27 5
21 -17 -4 -13 -7 -28 -7 -33 0 -6 -7 -1 -15 10 -14 18 -14 18 -15 -5 0 -18 -4
-22 -19 -18 -12 3 -28 -5 -42 -19 -13 -14 -36 -36 -51 -51 -15 -14 -25 -30
-22 -34 3 -5 -1 -9 -8 -9 -7 0 -31 -19 -53 -42 -22 -23 -34 -38 -26 -33 11 6
13 4 8 -8 -9 -23 29 -31 111 -23 46 4 72 12 82 24 15 19 22 22 41 22 8 0 7 6
-2 17 -12 15 -12 16 4 10 15 -6 18 -3 16 20 0 8 63 24 69 19 1 -2 -1 -18 -5
-36 -6 -33 -6 -33 -16 -9 l-10 24 -6 -25 c-9 -32 17 -53 54 -44 25 6 26 5 22
-27 -3 -19 -6 -36 -6 -39 -1 -3 -8 6 -16 20 -14 25 -14 25 -15 3 0 -13 -4 -23
-10 -23 -9 0 -14 14 -11 33 0 4 -6 7 -14 7 -8 0 -15 -5 -15 -11 0 -6 -8 -8
-19 -4 -26 8 -51 -4 -51 -25 0 -11 -4 -21 -8 -24 -5 -3 -8 8 -7 23 1 24 -2 27
-19 23 -12 -3 -26 -9 -32 -13 -6 -5 -14 -6 -17 -3 -7 8 -37 -20 -37 -35 0 -5
-15 -12 -32 -14 -29 -3 -28 -4 8 -5 23 -1 75 -8 115 -16 137 -27 128 -28 141
15 12 42 17 46 36 27 9 -9 15 -9 24 0 7 7 18 12 25 12 11 0 12 -14 4 -69 -1
-3 -8 4 -16 15 -14 19 -14 19 -15 -2 0 -33 25 -49 56 -35 36 16 42 14 36 -14
-5 -28 -12 -31 -30 -13 -8 8 -9 4 -4 -17 11 -40 36 -54 60 -32 27 25 46 22 38
-5 -3 -13 -6 -30 -6 -38 -1 -12 -3 -11 -11 2 -16 27 -28 21 -20 -10 4 -15 19
-33 34 -40 15 -7 27 -21 27 -31 0 -22 26 -46 49 -46 10 0 16 -9 16 -24 0 -13
10 -30 22 -38 20 -14 24 -13 49 12 30 30 37 27 38 -14 1 -19 -3 -27 -12 -24
-6 3 -12 9 -12 15 0 5 -4 7 -8 4 -14 -9 -7 -44 13 -66 18 -20 20 -20 31 -5 7
10 17 14 23 10 14 -8 14 -32 1 -37 -6 -2 2 -16 19 -32 l29 -28 26 41 c32 50
56 54 56 9 0 -25 -3 -29 -12 -20 -18 18 -30 14 -23 -8 5 -14 2 -20 -9 -20 -9
0 -16 -4 -16 -8 0 -12 111 -102 126 -102 8 0 14 -4 14 -9 0 -16 -21 -24 -33
-12 -6 6 -25 11 -42 11 -36 0 -111 33 -142 62 -13 12 -23 16 -23 10 0 -7 3
-12 8 -12 4 0 13 -10 21 -23 13 -21 13 -22 -6 -4 -11 9 -23 14 -26 10 -4 -3
-7 2 -7 11 0 32 -40 74 -95 100 -61 29 -97 33 -115 11 -10 -13 -9 -15 9 -15
11 0 21 5 21 10 0 6 7 10 16 10 21 0 13 -22 -12 -35 -15 -8 -18 -16 -13 -35 4
-14 7 -19 8 -11 1 8 8 4 21 -11 11 -14 18 -35 15 -47 -2 -13 1 -21 10 -21 16
0 49 -61 38 -69 -5 -3 -9 -10 -10 -16 -1 -5 -5 -18 -8 -27 -4 -10 -3 -18 3
-18 6 0 16 8 21 18 8 14 11 14 12 2 1 -8 1 -21 0 -27 -1 -7 7 -13 19 -13 20 0
26 -21 21 -72 -1 -10 5 -28 13 -40 9 -12 16 -33 16 -45 0 -13 5 -23 11 -23 6
0 8 -9 4 -20 -4 -11 -2 -20 4 -20 6 0 11 -7 11 -15 0 -8 7 -15 16 -15 13 0 15
-8 12 -39 -5 -51 7 -44 17 11 l9 43 5 -45 6 -45 7 33 c4 17 12 32 18 32 14 0
13 -43 -2 -75 -12 -26 -3 -49 11 -27 4 7 15 10 25 6 14 -5 15 -9 4 -16 -11 -7
-10 -11 3 -21 9 -6 19 -25 23 -40 10 -40 26 -24 20 21 -4 35 -4 36 8 12 7 -14
16 -28 21 -31 5 -4 6 -16 2 -28 -3 -11 -2 -21 3 -21 5 0 13 10 17 23 l8 22 4
-23 c4 -22 6 -22 17 -6 8 11 19 15 31 11 25 -10 2 -35 -38 -40 -22 -3 -17 -4
18 -5 l50 -2 -3 50 c-3 31 0 50 7 50 6 0 8 -7 5 -15 -4 -8 -3 -26 0 -40 5 -18
13 -25 32 -25 14 0 23 -4 19 -10 -3 -5 1 -10 9 -10 8 0 13 6 10 13 -2 7 2 21
10 32 15 20 15 20 16 -2 l0 -23 22 22 c20 20 21 21 35 2 12 -16 11 -20 -4 -31
-16 -12 -15 -13 4 -13 17 0 24 13 43 79 23 83 21 147 -5 137 -8 -3 -19 2 -26
11 -11 12 -10 17 4 24 19 11 24 49 6 49 -6 0 -8 -9 -4 -21 6 -18 4 -20 -14
-14 -13 4 -29 1 -39 -7 -15 -12 -16 -11 -3 5 12 15 11 20 -3 36 -16 18 -16 20
0 29 20 11 10 34 -11 25 -9 -3 -15 1 -15 10 0 8 -7 17 -15 21 -17 6 -21 36 -5
36 6 0 10 9 10 21 0 11 4 18 8 15 5 -3 7 -19 4 -36 -3 -19 0 -30 8 -30 7 0 10
7 7 15 -4 8 -2 17 3 20 6 4 10 15 10 26 0 32 32 19 50 -19 9 -18 18 -30 21
-28 3 3 13 -20 23 -52 10 -31 23 -62 28 -69 5 -7 7 -17 4 -22 -4 -5 -2 -12 4
-16 5 -3 10 -17 10 -30 0 -13 4 -26 10 -30 5 -3 7 -12 3 -20 -3 -9 -2 -40 2
-70 7 -61 26 -72 60 -35 17 19 20 19 28 4 7 -13 5 -22 -10 -33 -11 -9 -18 -21
-16 -27 2 -6 -3 -17 -12 -24 -21 -18 -19 -40 5 -40 11 0 20 5 20 10 0 6 6 10
14 10 9 0 12 -8 8 -25 -2 -14 -8 -25 -13 -25 -5 0 -14 -11 -19 -25 -5 -14 -17
-28 -25 -31 -8 -4 -15 -13 -15 -21 0 -10 6 -13 16 -9 52 20 64 19 64 -7 0 -17
-7 -28 -20 -32 -11 -3 -20 -12 -20 -20 0 -8 -9 -17 -20 -20 -14 -5 -20 -15
-20 -38 0 -27 2 -29 13 -14 6 9 23 18 37 19 21 3 26 -2 28 -24 2 -19 -1 -28
-11 -28 -8 0 -22 -11 -31 -25 -9 -14 -22 -25 -30 -25 -10 0 -14 -36 -19 -152
-11 -243 -9 -548 4 -548 7 0 10 62 8 201 -3 188 -2 202 16 215 26 20 37 17 30
-6 -5 -14 -2 -20 9 -20 9 0 16 5 16 11 0 5 5 7 10 4 14 -9 12 -45 -3 -45 -12
0 -67 -52 -67 -64 0 -3 11 -6 24 -6 19 0 23 -4 19 -20 -7 -25 12 -26 26 -2 9
14 10 11 11 -15 0 -18 -4 -33 -8 -33 -11 0 -72 -55 -72 -65 0 -4 11 -5 25 -3
22 5 24 2 19 -18 -4 -15 -2 -24 6 -24 6 0 14 9 17 21 8 29 21 4 15 -28 -3 -14
-13 -28 -23 -30 -11 -3 -19 -11 -19 -18 0 -7 -9 -15 -20 -18 -36 -9 -21 -25
31 -32 27 -4 51 -5 52 -4 1 2 12 18 25 36 25 37 29 75 7 93 -29 24 -12 50 35
50 10 0 20 9 23 20 3 11 1 20 -4 20 -5 0 -9 6 -9 14 0 7 -13 19 -30 26 -21 9
-30 19 -30 36 0 22 4 24 55 24 53 0 72 11 39 24 -9 4 -14 13 -10 21 6 17 -4
27 -52 56 -28 16 -31 22 -22 38 15 29 12 59 -8 79 -18 18 -18 20 0 45 26 36
21 81 -10 85 l-23 3 29 37 c31 41 32 81 1 89 -24 7 -24 9 7 50 24 32 25 35 10
58 -9 14 -21 25 -27 25 -6 0 -2 12 9 27 33 49 34 52 9 75 l-24 23 19 30 c20
30 20 30 16 4 -4 -19 0 -26 10 -25 10 1 19 -14 26 -40 6 -22 21 -53 34 -69 19
-23 27 -27 40 -19 9 6 19 22 22 35 7 27 5 27 78 16 39 -6 52 -12 52 -24 0 -15
2 -14 14 2 13 17 14 16 21 -23 4 -23 8 -42 10 -42 1 0 21 7 44 15 22 8 41 10
41 5 0 -11 40 -34 47 -26 3 2 -7 20 -21 39 -14 19 -26 41 -26 49 0 9 -17 28
-37 43 -50 37 -74 67 -67 85 3 8 2 11 -2 7 -5 -4 -15 12 -24 35 -10 26 -22 43
-32 42 -11 -1 -14 7 -11 33 3 27 -1 35 -20 42 -32 12 -50 37 -43 58 8 20 -46
73 -75 73 -11 0 -22 7 -25 15 -4 8 -12 15 -20 15 -8 0 -14 10 -14 23 0 13 -11
34 -25 47 -17 16 -23 30 -19 43 3 11 0 38 -7 59 -10 31 -17 38 -31 34 -21 -5
-30 11 -47 79 -6 22 -17 49 -25 60 -13 18 -14 18 -11 -8 2 -15 -1 -29 -5 -32
-11 -7 -30 27 -31 57 -1 23 -1 23 -8 -2 l-8 -25 -13 28 c-7 15 -20 27 -29 28
-11 0 -12 2 -3 6 6 2 9 9 6 15 -4 6 -9 5 -15 -3 -4 -8 0 -24 12 -40 l19 -27
-48 -7 c-26 -3 -55 -5 -63 -3 -7 2 -13 -3 -12 -9 2 -8 -6 -12 -20 -10 -17 2
-23 -4 -25 -26 -2 -15 -8 -27 -13 -27 -13 0 -11 24 5 55 14 26 13 31 -7 56
-23 29 -37 36 -37 19 0 -5 -7 -10 -15 -10 -8 0 -16 -6 -16 -12 -1 -7 -2 -19
-3 -27 -1 -16 -26 -28 -26 -13 0 5 7 23 16 40 15 31 15 33 -15 69 -17 21 -31
45 -31 54 0 19 55 71 65 61 16 -16 -9 55 -26 74 -11 11 -19 24 -19 28 0 5 -13
25 -29 45 -16 20 -38 55 -48 76 -10 22 -21 42 -24 45 -4 3 -14 30 -22 60 -8
30 -18 66 -23 79 -6 22 -6 23 16 11 13 -7 33 -21 44 -32 51 -48 56 -35 7 16
-58 59 -64 87 -9 41 36 -30 50 -19 24 20 -9 13 -16 31 -16 40 0 8 -6 15 -13
15 -22 0 -36 52 -42 155 -4 55 -13 132 -20 170 -8 39 -14 100 -13 138 1 58 4
67 18 62 16 -5 17 0 9 42 -9 46 -4 74 23 146 13 34 28 19 28 -29 0 -21 15 -54
43 -95 36 -52 68 -81 170 -154 69 -49 161 -124 205 -165 43 -41 114 -97 158
-125 112 -71 216 -177 233 -238 17 -60 10 -171 -19 -287 -16 -64 -19 -89 -11
-102 20 -33 11 -62 -34 -112 -25 -26 -45 -51 -45 -55 0 -3 -14 -23 -30 -43
-27 -32 -30 -42 -25 -80 4 -24 14 -63 24 -88 27 -66 51 -143 51 -161 0 -9 9
-24 20 -34 11 -10 20 -22 20 -26 0 -19 216 -299 230 -299 4 0 17 15 30 32 31
43 99 104 166 149 85 58 159 72 360 65 93 -4 187 -8 209 -11 100 -13 125 -13
120 -4 -4 5 0 9 7 9 7 0 22 17 34 38 20 36 22 72 3 72 -16 0 -10 26 11 45 11
10 20 24 20 31 0 7 9 18 19 24 11 5 21 20 23 32 2 18 9 23 30 23 14 -1 25 3
22 6 -2 4 1 11 7 15 6 4 16 -1 21 -10 13 -23 27 -11 21 17 -5 21 -5 22 10 2
13 -16 17 -17 31 -6 14 12 20 9 17 -11 0 -4 14 1 31 10 44 23 48 26 91 64 l37
33 15 155 c8 85 15 182 15 215 0 37 6 68 16 80 13 17 14 2 8 -149 -8 -200 -8
-183 -6 -224 l2 -33 38 28 c75 55 105 91 232 283 43 64 71 117 121 225 5 11
14 45 20 75 6 30 15 75 20 100 14 64 12 85 -11 135 -25 56 -38 64 -36 22 1
-23 -3 -31 -14 -30 -12 2 -14 -8 -12 -55 3 -54 3 -56 -13 -35 -18 26 -32 203
-16 203 13 0 23 -16 32 -54 l7 -31 1 31 c1 44 -43 87 -184 181 -38 25 -77 54
-86 64 -9 11 -20 19 -25 19 -5 0 -60 26 -122 57 l-114 58 7 60 c3 33 12 182
20 330 l13 270 42 63 c23 34 46 62 51 62 5 0 9 4 9 9 0 6 12 23 26 38 14 15
30 37 35 48 5 11 18 34 28 50 11 17 20 37 20 46 1 9 21 57 46 108 25 50 45
100 45 111 0 10 5 22 11 25 6 4 8 14 5 22 -5 12 -1 14 21 8 76 -19 100 -18
117 6 17 25 22 54 8 45 -5 -3 -16 10 -25 29 -16 33 -16 35 3 45 15 8 20 6 24
-8 2 -9 4 -4 3 12 -1 16 -8 31 -15 34 -7 2 -10 -2 -6 -11 3 -9 -2 -16 -13 -19
-34 -8 -50 2 -50 32 0 26 2 27 13 12 7 -9 10 -21 7 -26 -4 -5 -1 -6 4 -3 6 4
11 22 10 41 -1 25 8 44 31 70 36 42 37 44 17 70 -23 31 -18 42 8 18 22 -21 24
-21 39 -5 31 36 76 195 80 280 2 45 6 79 9 77 6 -3 49 166 49 189 0 5 22 28
48 52 27 24 56 63 66 87 10 24 22 51 27 60 5 10 9 31 9 47 0 31 33 81 46 69 4
-4 1 -15 -6 -23 -11 -13 -11 -19 2 -31 13 -13 19 -9 50 38 19 29 37 67 41 84
3 18 9 45 12 60 5 23 4 26 -5 14 -10 -13 -11 -12 -6 3 3 10 6 25 6 33 0 8 6
11 15 8 10 -4 15 0 15 15 0 12 4 21 9 21 11 0 -1 61 -26 130 -11 30 -26 75
-32 100 -7 25 -23 79 -36 120 -14 48 -21 90 -18 116 5 42 -16 140 -41 198 -25
56 -26 66 -10 106 22 55 9 237 -21 285 -7 11 -22 52 -34 90 -38 121 -124 286
-170 324 -43 36 -51 51 -26 51 11 0 9 11 -10 49 -14 27 -32 51 -40 55 -8 3
-14 15 -12 28 1 16 -3 23 -15 22 -10 -1 -14 4 -11 12 3 7 -2 21 -11 29 -15 15
-16 15 -16 -4 0 -27 -12 -27 -29 0 -11 19 -11 21 3 16 29 -12 16 8 -29 41 -27
19 -45 27 -45 20 0 -7 -9 -2 -20 12 -11 14 -20 22 -20 18 0 -5 -9 1 -20 12
-12 12 -18 26 -14 32 4 7 3 8 -4 4 -19 -12 -13 12 6 26 10 7 22 20 27 28 6 11
4 11 -11 -2 -11 -9 -33 -15 -51 -14 -31 2 -32 1 -16 -16 25 -27 10 -31 -19 -5
-14 13 -30 21 -36 19 -6 -2 -16 6 -22 18 -9 16 -15 19 -25 10 -10 -8 -15 -8
-20 0 -4 7 -18 9 -31 6 -31 -8 -32 12 -1 24 19 8 20 9 3 9 -11 1 -16 4 -12 8
3 4 24 6 46 5 40 -3 56 13 23 21 -14 3 -11 6 10 11 40 12 33 23 -10 18 -35 -4
-37 -4 -23 14 14 16 13 17 -3 11 -10 -4 -22 -7 -26 -7 -4 0 -18 -9 -31 -20
-13 -11 -28 -20 -34 -20 -7 0 -7 3 1 8 14 9 5 26 -21 35 -15 6 -16 10 -6 23
11 12 15 12 22 2 7 -10 9 -10 5 2 -2 8 -12 15 -23 15 -10 0 -20 8 -22 18 -2 9
-8 17 -14 17 -5 0 -8 -7 -4 -15 3 -8 1 -15 -4 -15 -6 0 -10 7 -10 15 0 27 -20
16 -21 -12 -1 -23 -2 -24 -6 -6 -2 12 3 36 12 53 9 17 13 36 9 42 -4 7 -13 0
-22 -18 l-15 -29 -12 29 c-8 20 -15 25 -20 16 -4 -7 -2 -16 6 -21 7 -4 10 -11
6 -16 -5 -4 -12 -1 -17 7 -8 13 -12 12 -24 -5 -25 -32 -18 -11 16 54 17 32 41
64 52 70 12 5 15 10 7 10 -8 1 -34 -11 -59 -25 l-44 -26 6 29 c6 24 3 29 -13
29 -15 0 -17 -3 -9 -13 8 -10 6 -13 -10 -13 -16 0 -19 5 -14 23 3 12 10 25 16
29 7 5 3 8 -8 8 -10 0 -25 8 -32 18 -13 16 -13 16 -14 -3 0 -17 -2 -17 -10 -5
-6 9 -13 11 -17 5 -5 -5 -16 -11 -26 -12 -15 -1 -18 4 -13 25 l7 27 -19 -24
c-17 -20 -20 -21 -25 -7 -6 14 -11 12 -37 -14 -20 -21 -30 -26 -30 -15 0 18
-7 19 -25 3 -33 -33 -57 -48 -80 -54 -14 -3 -25 -11 -25 -18 0 -16 -20 16 -20
33 0 11 3 11 15 1 9 -7 19 -10 22 -6 4 4 1 11 -6 15 -18 11 -5 31 20 31 10 0
19 5 19 11 0 5 5 7 10 4 6 -3 10 -1 10 5 0 8 -7 9 -17 5 -33 -14 -63 -17 -63
-7 0 5 9 12 20 15 11 3 20 11 20 17 0 10 -4 10 -15 0 -25 -21 -30 -2 -6 19 20
18 21 20 4 23 -17 3 -71 -19 -83 -33 -9 -11 -150 -18 -156 -7 -3 5 -14 2 -25
-8 -23 -21 -99 -28 -99 -9 0 7 -6 15 -12 18 -9 3 -7 9 6 19 10 8 16 20 12 26
-4 7 -2 12 3 12 6 0 11 5 11 10 0 12 -20 13 -40 1z m-455 -1096 c82 -5 225
-37 250 -56 18 -13 147 -49 175 -49 16 0 32 -4 35 -10 3 -5 19 -10 34 -10 15
0 50 -11 77 -24 28 -13 70 -27 95 -29 55 -7 76 -15 83 -33 4 -10 15 -13 33 -9
16 3 22 2 14 -1 -8 -4 10 -17 48 -34 34 -15 67 -35 75 -45 7 -10 28 -23 47
-29 26 -9 33 -16 32 -34 -2 -12 2 -22 8 -22 5 0 8 -3 5 -8 -2 -4 4 -25 14 -47
11 -22 19 -55 20 -72 0 -18 5 -33 10 -33 6 0 10 -5 10 -12 0 -6 7 -19 16 -29
8 -9 16 -23 18 -31 5 -34 149 -173 180 -173 19 0 56 -35 56 -53 0 -10 -8 -13
-27 -9 -15 3 -38 0 -52 -5 -25 -10 -25 -11 -6 -19 16 -8 16 -8 -5 -3 -14 3
-47 8 -75 10 -124 9 -142 12 -167 24 -24 11 -30 11 -46 -3 -10 -10 -35 -17
-55 -17 -20 0 -37 -4 -37 -9 0 -5 -25 -12 -57 -16 -31 -4 -63 -10 -72 -15 -9
-4 -29 -13 -46 -20 -16 -6 -46 -20 -65 -31 -19 -11 -62 -33 -95 -49 -38 -18
-69 -42 -85 -65 l-25 -35 -75 6 c-75 6 -195 38 -205 55 -4 5 0 9 9 9 12 0 13
7 4 38 -10 38 -53 92 -74 92 -6 0 -23 9 -38 21 -14 11 -26 15 -26 9 0 -8 -6
-8 -21 0 -11 7 -28 9 -36 5 -9 -3 -20 0 -25 7 -5 9 -8 7 -8 -7 0 -15 -3 -16
-12 -7 -15 15 -32 16 -23 2 14 -23 -16 -8 -31 16 -15 22 -22 25 -51 19 -18 -3
-33 -2 -33 2 0 5 -18 7 -40 5 -26 -3 -40 0 -40 7 0 9 -29 10 -103 6 -60 -3
-115 -1 -130 4 -18 7 -28 7 -32 0 -4 -5 -14 -7 -24 -4 -9 3 -34 -4 -56 -15
-22 -11 -45 -20 -53 -20 -7 0 -11 -4 -8 -9 3 -5 -9 -12 -27 -16 -22 -5 -26 -9
-14 -12 29 -8 19 -26 -12 -21 -23 3 -31 0 -35 -15 -3 -13 -10 -18 -20 -14 -9
4 -16 2 -16 -3 0 -6 6 -10 13 -11 6 0 30 -2 52 -5 22 -2 65 -4 95 -5 52 0 53
-1 20 -9 -19 -5 -82 -12 -140 -14 -58 -3 -165 -16 -239 -29 -111 -20 -138 -28
-153 -47 -17 -21 -18 -21 -18 -2 0 29 17 38 100 52 41 6 85 18 97 26 12 8 31
14 43 14 11 0 20 7 20 15 0 9 7 18 15 21 8 4 15 10 15 15 0 12 59 102 96 147
72 88 110 172 79 172 -28 0 -16 37 20 59 19 11 19 12 -2 6 -34 -9 -45 2 -27
30 9 14 11 26 5 29 -5 3 -11 1 -13 -5 -2 -6 -12 -2 -22 10 -18 20 -18 20 15
34 l34 15 -25 10 c-23 10 -24 11 -3 11 16 1 20 6 16 21 -4 15 0 20 13 20 11 0
28 7 38 15 19 14 17 15 -20 16 -21 1 -30 4 -19 6 22 6 55 32 55 44 0 4 -14 3
-31 -3 -16 -6 -33 -7 -37 -3 -4 4 -1 10 6 12 6 3 12 12 12 20 0 9 -6 13 -15 9
-8 -3 -15 -1 -15 4 0 6 11 10 25 10 18 0 23 4 19 15 -6 16 31 54 54 55 6 0 12
6 12 13 0 11 36 41 52 42 4 0 13 6 19 13 7 6 19 12 26 12 7 0 20 11 29 25 9
14 19 23 23 20 4 -2 20 5 36 15 21 14 33 16 47 9 13 -7 18 -6 18 4 0 12 21 15
97 16 54 1 100 4 103 7 3 3 27 3 55 1 27 -3 91 -8 140 -12z m-592 -1029 c3 -7
20 -16 39 -20 28 -7 30 -9 13 -15 -19 -8 -19 -8 2 -15 13 -4 28 -4 35 0 9 5
10 4 3 -4 -5 -6 -39 -18 -75 -27 -35 -9 -76 -24 -90 -34 -41 -28 -80 -41 -103
-36 -22 5 -87 -27 -87 -43 0 -4 -16 -16 -35 -26 -31 -17 -39 -17 -60 -6 -32
17 -33 66 -3 126 19 39 28 46 94 70 110 40 257 57 267 30z m2084 -96 c105 -21
243 -69 243 -84 0 -5 7 -17 16 -27 35 -38 27 -297 -12 -413 -16 -47 -86 -126
-134 -151 -146 -76 -637 -55 -835 35 -61 28 -57 34 8 10 135 -50 416 -88 566
-76 131 11 237 38 225 57 -3 5 1 6 9 3 8 -3 20 3 28 12 12 16 12 17 -5 11 -16
-6 -17 -5 -6 8 10 12 15 13 21 3 9 -15 50 29 75 80 24 51 44 175 44 275 0 169
-38 202 -300 257 -47 10 -75 19 -63 19 11 1 65 -8 120 -19z m-1922 -4 l30 -12
-62 -13 c-35 -6 -80 -18 -100 -26 l-38 -15 38 5 c20 3 53 8 73 11 33 5 35 3
32 -18 -2 -13 -7 -23 -13 -23 -5 -1 -25 -10 -43 -22 -19 -11 -42 -18 -53 -16
-12 4 -26 -3 -38 -16 -10 -11 -24 -21 -30 -21 -7 0 -27 -11 -44 -24 -18 -13
-42 -27 -54 -30 -34 -11 -26 32 14 73 46 45 36 49 -19 8 -39 -30 -44 -32 -43
-15 4 61 129 147 229 158 88 10 88 10 121 -4z m597 -97 c15 -98 -31 -319 -85
-414 -27 -48 -91 -89 -172 -110 -74 -19 -373 -38 -475 -30 -223 19 -358 75
-405 171 -31 61 -45 143 -44 249 l1 80 13 -53 c7 -30 15 -56 18 -58 2 -3 8 15
12 38 8 40 9 41 13 13 5 -44 58 -95 98 -95 18 0 35 -4 38 -9 12 -18 66 -18 83
1 9 10 24 18 34 18 27 0 99 -40 99 -55 0 -7 6 -15 12 -17 9 -3 7 -10 -6 -24
-19 -18 -19 -19 5 -25 13 -4 38 -8 54 -8 23 -1 27 -3 15 -11 -12 -8 -12 -10 5
-11 l20 0 -20 -9 c-13 -6 31 -9 121 -7 78 1 137 6 130 10 -6 4 10 5 37 1 27
-4 52 -2 60 4 6 5 26 13 44 16 17 4 42 18 55 30 13 13 32 26 43 29 15 3 13 5
-8 6 -16 1 -30 -5 -33 -14 -7 -18 -58 -21 -51 -2 2 6 11 11 19 11 10 -1 14 5
11 15 -3 14 3 16 43 12 40 -3 46 -1 41 13 -4 10 -1 16 8 16 12 0 14 11 12 50
l-3 51 31 -3 c36 -4 67 23 65 55 -4 44 0 68 10 62 6 -3 10 1 10 10 0 9 5 13
10 10 6 -3 10 -1 10 4 0 25 18 8 22 -20z m1256 -816 c12 -3 22 -9 22 -14 0
-19 28 -8 34 13 3 15 9 19 15 13 6 -6 6 -40 1 -90 -9 -71 -14 -93 -39 -144
-13 -27 -92 -43 -221 -43 -85 -1 -125 3 -128 11 -2 6 -14 11 -27 11 -13 0 -27
5 -31 11 -4 8 -9 7 -16 -2 -8 -11 -11 -11 -15 -1 -4 9 -8 10 -18 2 -15 -12
-18 -6 -34 70 -6 25 -13 57 -17 72 -5 24 -2 29 30 42 20 8 36 20 36 26 0 7 10
9 28 5 17 -3 40 0 58 10 22 11 56 15 137 14 59 -1 111 2 115 5 3 4 16 4 27 1
11 -4 30 -9 43 -12z m-2439 -2778 c12 -31 21 -60 21 -64 0 -5 18 -48 40 -96
22 -48 43 -106 46 -129 l5 -41 -21 25 c-32 36 -97 170 -109 221 -16 70 -21
139 -12 139 5 0 19 -25 30 -55z"/>
<path d="M4742 4330 c-16 -112 -35 -330 -30 -335 2 -3 18 6 36 18 26 18 32 29
32 60 0 23 -5 37 -12 37 -9 0 -8 4 2 11 11 8 12 12 3 16 -15 5 -18 101 -5 148
5 17 3 51 -3 80 l-11 50 -12 -85z"/>
<path d="M4272 4138 c-7 -106 -17 -264 -23 -352 -6 -87 -8 -160 -5 -163 3 -3
11 6 17 21 7 14 20 28 30 31 35 11 354 257 357 275 4 22 -14 60 -29 60 -5 0
-27 -11 -48 -25 -22 -13 -51 -27 -65 -31 -14 -3 -26 -10 -26 -15 0 -12 -148
-109 -166 -109 -13 0 -18 -18 -15 -47 1 -6 -4 -15 -10 -19 -13 -8 -8 136 12
347 11 118 7 219 -10 219 -4 0 -12 -87 -19 -192z"/>
<path d="M3917 4003 c-4 -3 -7 -37 -7 -74 0 -38 -4 -135 -10 -216 -15 -235
-18 -373 -9 -373 5 0 9 15 9 33 0 17 4 37 8 43 4 7 67 51 140 98 72 48 132 90
132 95 0 10 -21 71 -24 71 -20 0 -231 -143 -218 -148 6 -2 20 2 32 8 11 6 26
8 32 4 6 -4 8 -3 5 3 -7 11 22 28 31 18 3 -3 0 -5 -6 -5 -7 0 -12 -6 -12 -14
0 -8 -14 -25 -31 -38 -17 -13 -42 -34 -55 -47 l-25 -25 5 130 c3 71 9 200 12
287 4 86 5 157 2 157 -2 0 -8 -3 -11 -7z"/>
<path d="M3530 3818 c0 -7 -3 -24 -7 -37 -4 -17 -3 -22 5 -17 7 4 12 3 12 -3
0 -5 -4 -11 -8 -13 -5 -1 -5 -41 0 -88 4 -47 6 -209 4 -360 -2 -151 -1 -243 3
-203 5 61 10 74 32 92 20 15 25 27 22 46 -6 28 -13 31 -31 13 -9 -9 -12 35
-12 199 0 116 -3 220 -6 230 -5 15 -4 16 6 3 9 -12 10 -5 6 34 -3 27 -6 64 -6
82 0 19 -4 34 -10 34 -5 0 -10 -6 -10 -12z"/>
<path d="M4572 3652 c-13 -2 -26 -10 -29 -18 -4 -10 -26 -14 -88 -14 -70 0
-87 -3 -111 -22 -56 -44 -58 -47 -39 -68 11 -12 14 -26 10 -39 -4 -13 1 -33
12 -51 13 -22 15 -33 6 -38 -8 -5 -8 -12 2 -26 8 -10 18 -15 24 -11 6 3 11 1
11 -5 0 -7 8 -9 20 -5 14 5 20 2 20 -10 0 -9 -12 -18 -30 -22 -36 -7 -31 -17
8 -18 24 0 28 -5 33 -40 3 -22 14 -87 24 -145 9 -58 19 -127 22 -154 l6 -49
12 29 13 29 7 -33 c5 -20 11 -29 15 -22 10 16 19 -35 25 -145 6 -111 11 -136
27 -147 20 -12 26 -10 22 10 -5 23 -54 501 -63 627 -5 58 -5 107 1 118 6 12 5
19 -7 23 -19 8 -20 34 0 34 18 0 19 14 3 39 -9 15 -9 23 2 36 19 23 26 6 35
-90 7 -81 26 -229 64 -515 36 -265 52 -355 63 -365 7 -7 9 0 4 25 -3 19 -10
87 -17 150 -6 63 -15 117 -20 118 -11 4 -12 49 -1 56 5 3 5 31 1 63 -12 95
-11 107 5 94 8 -7 12 -21 8 -33 -3 -14 -1 -19 6 -14 12 7 26 -29 17 -44 -3 -5
-1 -10 5 -10 11 0 11 11 -3 115 -1 13 5 20 18 23 60 9 69 13 54 23 -9 6 -10 9
-1 9 6 0 12 7 12 16 0 12 -7 14 -29 9 -17 -4 -32 -2 -36 5 -4 7 -19 9 -35 5
-27 -6 -29 -4 -28 24 1 17 6 31 12 31 6 0 19 7 30 15 17 13 17 15 2 31 -22 22
-16 26 38 26 44 0 46 1 46 29 0 25 -4 29 -27 30 -16 1 -32 1 -37 0 -21 -4 -46
12 -46 30 0 16 7 19 55 19 48 0 55 3 55 19 0 25 -33 36 -62 19 -13 -7 -38 -18
-56 -24 -50 -18 -36 5 24 39 44 26 46 28 17 23 -22 -4 -35 0 -45 11 -12 15
-10 16 15 9 38 -9 37 22 -3 57 -16 15 -30 36 -30 48 0 45 -25 68 -68 61z"/>
<path d="M3556 2942 c181 -120 276 -206 331 -300 33 -56 63 -169 63 -239 0
-66 10 -92 63 -161 66 -86 100 -149 94 -173 -3 -13 2 -32 13 -48 11 -14 22
-39 26 -56 l6 -30 -27 30 -26 30 5 -35 c4 -18 11 -37 18 -41 17 -11 16 -152
-2 -174 -11 -13 -11 -18 -1 -25 8 -4 11 -12 7 -18 -3 -6 -2 -13 3 -16 5 -4 12
-2 15 3 3 5 20 6 38 2 26 -5 34 -12 36 -33 2 -15 11 -29 20 -31 14 -4 13 -6
-5 -12 -31 -10 -29 -20 6 -35 25 -10 34 -9 53 4 34 24 39 20 20 -17 -16 -32
-19 -33 -55 -26 -22 4 -58 20 -82 37 -53 37 -85 48 -85 30 0 -15 30 -36 160
-106 49 -26 60 -38 60 -65 0 -27 -26 -48 -53 -43 -24 4 -25 2 -31 -70 -4 -41
-4 -78 -1 -83 2 -5 -2 -12 -11 -15 -8 -3 -14 -14 -13 -23 3 -22 -9 -86 -24
-133 -6 -19 -11 -39 -12 -45 0 -5 -10 -12 -22 -15 -28 -7 -63 -52 -63 -82 0
-12 -4 -29 -9 -37 -14 -22 -3 -39 26 -39 17 1 38 -12 60 -36 34 -36 34 -36 24
-93 -6 -31 -11 -58 -11 -60 0 -2 -7 -3 -15 -3 -13 0 -15 -9 -9 -50 4 -33 3
-50 -4 -50 -6 0 -14 5 -18 11 -3 6 -15 8 -26 6 -13 -4 -22 1 -28 16 -13 32
-67 93 -75 85 -12 -12 4 -55 29 -82 12 -14 25 -24 27 -22 2 3 23 -12 46 -32
l41 -37 -14 -53 c-8 -30 -25 -82 -39 -116 -15 -37 -29 -100 -35 -158 -5 -53
-13 -106 -18 -119 -20 -55 -12 -59 128 -59 94 0 130 3 133 13 4 9 7 9 18 0 16
-15 59 -17 59 -3 0 6 5 10 11 10 5 0 7 -4 4 -10 -3 -5 2 -10 12 -10 15 0 23
13 34 56 18 71 35 70 31 -1 l-3 -55 160 0 161 0 0 393 c0 301 -3 396 -12 406
-10 11 -10 14 0 18 8 3 12 32 12 96 l0 92 -26 -32 c-14 -18 -29 -33 -34 -33
-11 0 36 96 50 105 15 10 13 252 -2 258 -10 4 -10 6 0 6 8 1 12 22 12 69 0 78
-6 89 -32 65 -17 -15 -18 -15 -18 0 0 10 -8 17 -19 17 -10 0 -22 7 -25 16 -8
21 -8 20 9 37 14 15 55 12 55 -3 0 -4 7 -10 15 -14 13 -4 15 8 15 74 0 82 -7
94 -37 65 -8 -9 -18 -13 -22 -10 -3 4 4 15 16 25 l22 18 -21 6 c-13 3 -26 0
-30 -7 -5 -9 -10 -9 -20 1 -6 6 -20 12 -30 12 -10 0 -18 5 -18 11 0 5 10 9 22
7 15 -2 24 3 26 15 2 11 -3 17 -15 18 -10 1 -4 4 12 8 17 4 45 4 63 0 l32 -7
-1 162 c0 88 -3 155 -6 148 -2 -6 -9 -10 -13 -7 -5 3 -7 12 -4 20 4 8 10 12
15 9 5 -3 9 23 8 60 -1 36 -5 66 -10 66 -5 0 -9 8 -9 19 0 10 -6 24 -14 31 -8
6 -12 19 -9 27 5 13 1 15 -20 9 -21 -5 -25 -3 -21 9 4 11 -1 15 -17 15 -22 1
-22 1 -6 11 15 9 27 7 53 -7 19 -10 34 -24 34 -31 0 -7 4 -13 9 -13 14 0 12
131 -2 148 -7 8 -11 17 -9 19 8 11 0 14 -12 4 -11 -9 -15 -8 -20 5 -4 10 -2
20 4 24 15 9 -77 71 -95 64 -11 -5 -13 -2 -8 12 5 13 3 16 -9 12 -10 -4 -15
-1 -14 9 0 8 -8 20 -19 27 -11 6 -32 19 -47 29 -14 9 -36 17 -48 17 -16 0 -20
4 -16 16 4 11 -1 18 -14 21 -11 3 -20 9 -20 14 0 5 -9 9 -20 9 -11 0 -20 5
-20 10 0 6 -9 10 -21 10 -11 0 -18 4 -15 8 12 20 -108 82 -254 132 -36 12 -74
26 -85 31 -27 12 -321 60 -365 59 -20 0 -55 6 -79 15 -64 22 -71 18 -25 -13z
m1034 -942 c0 -5 11 -12 25 -16 43 -11 50 -30 20 -58 -26 -24 -31 -64 -7 -58
7 1 12 -2 12 -8 0 -5 6 -10 13 -10 7 0 27 -13 45 -29 17 -16 40 -31 49 -33 14
-3 10 -8 -16 -21 -37 -19 -91 -23 -91 -7 0 5 -16 16 -36 25 -39 16 -39 35 0
28 14 -3 28 -14 31 -24 4 -10 13 -20 21 -20 8 -1 19 -2 24 -3 6 -1 10 4 9 9 0
6 -7 9 -16 7 -11 -3 -14 1 -10 13 4 10 0 18 -11 22 -32 12 -61 51 -55 74 5 18
3 21 -10 16 -9 -3 -19 -2 -22 3 -4 6 -15 10 -26 10 -10 0 -19 7 -19 15 0 9 -9
15 -22 15 -22 1 -22 1 -5 14 10 8 17 18 16 22 -1 5 -1 12 0 17 2 11 81 9 81
-3z"/>
<path d="M111 2759 c-17 -17 -28 -35 -25 -41 3 -5 -3 -12 -15 -15 -12 -3 -21
-12 -21 -19 0 -8 -7 -14 -15 -14 -29 0 -35 -38 -34 -227 1 -103 4 -177 6 -163
3 14 8 30 13 35 4 6 13 28 20 50 22 70 46 108 120 190 40 44 79 96 87 115 8
19 22 40 31 46 14 11 14 13 0 28 -21 20 -44 21 -52 1 -3 -8 -12 -15 -20 -15
-8 0 -18 -5 -22 -12 -5 -8 -2 -9 11 -4 15 5 16 4 5 -9 -7 -8 -18 -15 -24 -15
-6 0 -20 -16 -30 -35 -11 -19 -23 -35 -28 -35 -5 0 -13 -11 -18 -25 -6 -16
-14 -23 -25 -19 -10 4 -15 0 -15 -11 0 -9 -4 -13 -10 -10 -5 3 -10 1 -10 -4 0
-6 -5 -11 -11 -11 -14 0 -2 37 21 64 42 48 130 172 129 181 0 6 -3 4 -6 -3 -4
-9 -8 -10 -18 -2 -10 8 -21 3 -44 -21z"/>
<path d="M1056 2322 c-3 -5 6 -20 21 -33 14 -13 36 -41 50 -62 13 -21 33 -47
43 -57 11 -11 20 -27 20 -35 0 -8 6 -15 13 -15 12 0 50 -50 63 -82 3 -10 12
-18 19 -18 8 0 17 -5 21 -12 5 -7 3 -8 -5 -3 -9 5 -12 2 -9 -11 2 -11 8 -18
13 -17 6 1 15 -8 22 -20 11 -20 12 -19 13 17 0 36 -16 63 -89 152 -4 5 -14 21
-21 34 -16 30 -106 125 -142 151 -15 11 -29 15 -32 11z"/>
<path d="M557 1874 c-11 -11 3 -24 18 -17 8 3 15 0 15 -7 0 -6 -8 -10 -17 -8
-10 1 -29 -5 -42 -14 -14 -10 -27 -15 -30 -12 -3 3 1 10 9 15 11 8 12 12 2 16
-6 2 -10 9 -6 14 3 5 -6 9 -20 9 -26 0 -35 -13 -16 -25 5 -3 7 -12 4 -20 -4
-8 -9 -13 -14 -10 -4 2 -13 -8 -20 -23 l-14 -27 -7 35 -6 35 -2 -38 c-1 -24
-8 -43 -21 -54 -11 -10 -20 -27 -20 -39 0 -12 -6 -27 -14 -33 -8 -6 -16 -22
-19 -34 -6 -22 -6 -22 14 2 22 27 27 6 4 -25 -8 -12 -11 -24 -7 -28 3 -4 0
-12 -8 -17 -13 -9 -12 -10 2 -6 14 5 16 -2 12 -51 -2 -31 -4 -65 -4 -74 -1
-10 -5 -18 -11 -18 -5 0 -9 -4 -9 -10 0 -5 7 -10 16 -10 8 0 13 -4 9 -10 -3
-5 -11 -7 -18 -4 -7 2 -23 -7 -35 -20 l-21 -25 30 6 30 6 -30 -34 c-17 -18
-31 -38 -30 -44 0 -5 3 -4 6 3 6 14 33 16 33 2 0 -5 -4 -10 -10 -10 -5 0 -10
-9 -10 -20 0 -11 7 -20 15 -20 8 0 15 4 15 10 0 5 7 7 15 4 12 -5 10 -12 -13
-34 l-29 -28 31 2 c30 1 31 -1 32 -39 0 -22 -3 -46 -7 -54 -15 -31 11 -59 60
-66 25 -3 79 -15 120 -26 137 -35 191 -20 191 53 0 20 -6 43 -13 50 -9 8 -11
21 -6 33 7 19 8 19 8 -2 1 -28 17 -30 24 -3 5 21 -16 45 -32 36 -5 -4 -13 -1
-17 5 -3 6 -1 15 7 19 10 7 10 11 0 24 -10 12 -11 19 -2 29 13 16 5 28 -15 20
-11 -4 -12 1 -4 23 9 25 9 84 0 184 -2 23 -3 23 -9 -5 -4 -16 -4 -32 0 -35 4
-3 3 -23 -1 -45 -4 -22 -9 -33 -10 -25 -1 8 -3 26 -6 40 -2 14 -4 58 -4 98 0
48 -3 71 -10 67 -5 -3 -10 2 -10 12 0 10 9 24 20 31 11 7 20 17 20 23 0 8 -5
8 -15 -1 -12 -10 -18 -9 -31 5 -11 11 -14 19 -7 23 13 8 21 98 10 108 -4 4 -7
2 -7 -4 0 -7 -4 -12 -9 -12 -5 0 -9 20 -8 45 1 25 6 45 11 45 5 0 1 9 -9 20
-18 20 -36 25 -48 14z"/>
<path d="M2625 1240 c4 -20 3 -30 -5 -30 -7 0 -10 6 -7 14 5 11 0 13 -25 5
-31 -8 -48 -24 -48 -44 0 -16 57 -37 81 -30 21 7 53 -21 43 -37 -3 -5 3 -8 13
-9 10 0 13 -3 6 -6 -18 -7 -16 -23 2 -23 20 0 19 24 -1 41 -21 17 -42 61 -37
77 7 19 24 14 55 -15 48 -46 76 -34 46 20 -15 26 -31 37 -78 54 -49 18 -52 17
-45 -17z"/>
<path d="M2141 767 c-1 -48 -25 -104 -59 -140 -21 -22 -26 -35 -23 -72 2 -34
-1 -47 -13 -51 -12 -5 -14 -10 -6 -19 8 -9 8 -15 0 -20 -5 -3 -10 -31 -10 -61
0 -40 -5 -59 -19 -73 -11 -11 -17 -22 -14 -25 3 -3 2 -13 -2 -23 -7 -16 -9
-15 -15 7 -8 24 -8 24 -9 2 -1 -12 8 -31 18 -41 22 -22 19 -49 -9 -78 -15 -17
-16 -24 -5 -55 11 -35 12 -50 0 -95 -4 -19 -1 -23 19 -23 21 0 26 7 36 50 7
28 16 53 21 56 5 3 10 15 10 27 1 17 2 18 6 5 6 -22 33 -24 33 -2 0 9 -9 18
-19 21 -28 7 -36 54 -16 94 12 23 16 45 11 77 -3 24 -1 86 5 138 9 87 19 123
63 243 12 32 14 51 7 70 -9 25 -9 24 -10 -12z"/>
</g>
</svg>*/

      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="300.000000pt"
        height="300.000000pt"
        viewBox="0 0 300.000000 300.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <metadata>
          Created by potrace 1.16, written by Peter Selinger 2001-2019
        </metadata>
        <g
          transform="translate(0.000000,300.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path
            d="M1395 2984 c-595 -45 -1103 -443 -1299 -1016 -59 -171 -78 -288 -79
-473 -1 -221 30 -376 116 -585 181 -443 596 -776 1081 -869 135 -26 368 -29
507 -5 422 72 780 299 1008 640 190 282 270 584 250 934 -39 666 -552 1236
-1219 1354 -90 16 -281 26 -365 20z m276 -444 c37 -5 109 -24 160 -41 555
-183 850 -779 663 -1334 -58 -174 -166 -333 -304 -451 -33 -28 -74 -72 -91
-97 -40 -61 -99 -111 -176 -149 -56 -27 -76 -31 -190 -38 -134 -7 -181 -21
-206 -60 -15 -26 -33 -25 -47 1 -19 35 -77 51 -207 59 -106 7 -131 12 -187 38
-72 34 -146 97 -184 157 -14 22 -35 47 -46 55 -131 91 -286 311 -344 486 -76
228 -71 502 12 713 139 351 449 604 811 661 72 11 259 11 336 0z"
          />
          <path
            d="M1422 2485 c-130 -109 -1 -306 147 -227 88 47 93 181 9 232 -48 29
-118 27 -156 -5z"
          />
          <path
            d="M870 1890 l0 -310 310 0 310 0 0 43 c0 42 -2 45 -42 62 -24 11 -45
20 -47 22 -2 1 -7 40 -11 85 l-7 83 -2 -88 c-1 -75 1 -88 17 -93 29 -9 78 -34
57 -30 -11 3 -41 8 -67 11 l-47 7 -6 67 c-3 36 -8 78 -10 94 -3 19 0 27 10 27
8 0 15 7 15 15 0 8 7 15 15 15 8 0 15 -6 15 -12 0 -10 2 -10 9 0 6 10 13 10
32 2 34 -15 50 -45 59 -105 l8 -50 1 51 c2 77 -8 110 -34 122 -24 11 -52 81
-37 92 4 3 25 47 46 98 22 51 42 89 46 85 4 -4 21 -44 39 -88 18 -44 37 -85
42 -92 20 -23 -16 -103 -46 -103 -17 0 -25 -48 -24 -134 l2 -71 7 74 c6 58 13
79 32 97 29 29 98 43 98 20 0 -9 7 -16 16 -16 13 0 15 -8 10 -42 -3 -24 -8
-66 -12 -95 l-6 -52 -57 -8 c-31 -4 -64 -7 -73 -5 -15 1 -18 -6 -18 -43 l0
-45 310 0 310 0 0 310 0 310 -635 0 -635 0 0 -310z"
          />
          <path
            d="M713 1894 c-3 -8 -31 -27 -62 -40 -94 -42 -101 -53 -101 -156 l0 -88
78 0 77 0 28 88 c18 58 28 108 27 150 0 56 -2 62 -20 62 -11 0 -23 -7 -27 -16z"
          />
          <path
            d="M2320 1865 c0 -32 -2 -35 -30 -35 -23 0 -30 -5 -30 -19 0 -14 8 -21
28 -23 27 -3 27 -4 30 -81 3 -74 4 -78 25 -75 20 3 22 9 25 76 3 72 3 73 32
79 42 8 42 43 0 43 -28 0 -30 3 -30 35 0 31 -3 35 -25 35 -22 0 -25 -4 -25
-35z"
          />
          <path
            d="M872 1132 l3 -387 32 -66 c39 -79 111 -150 189 -186 43 -20 80 -27
177 -34 142 -10 161 -14 203 -45 29 -21 33 -22 45 -7 26 30 81 44 208 53 85 5
139 14 166 26 111 50 193 140 226 245 17 55 19 97 19 425 l0 364 -635 0 -636
0 3 -388z m735 334 c172 -37 312 -165 369 -336 31 -94 18 -328 -17 -293 -18
18 -41 115 -49 208 -18 198 -77 265 -232 265 -62 0 -79 -4 -110 -25 l-36 -25
-21 36 c-39 66 -134 87 -241 55 -64 -20 -73 -26 -86 -57 -11 -25 -13 -58 -10
-116 4 -66 3 -79 -9 -74 -20 7 -9 -17 15 -32 11 -7 20 -8 20 -4 0 5 10 14 23
19 l22 11 -25 10 c-14 6 -18 11 -10 11 12 1 12 3 -2 17 -14 14 -14 19 -2 44
17 33 31 37 100 32 45 -3 51 -7 61 -33 10 -26 9 -29 -10 -29 -40 -1 -89 -62
-68 -83 8 -8 11 -6 11 6 0 11 8 17 24 17 35 0 86 -12 82 -19 -2 -3 0 -33 5
-65 11 -67 -1 -111 -31 -121 -10 -3 -17 -13 -16 -22 1 -14 -8 -17 -44 -17 -51
-1 -71 17 -25 22 49 6 48 17 -1 13 -37 -2 -49 1 -66 19 -28 30 -36 16 -10 -20
12 -16 22 -37 22 -48 0 -10 5 -23 11 -29 14 -14 39 -6 39 12 0 7 9 11 23 9 12
-2 45 -5 72 -7 45 -2 50 -5 53 -27 l4 -25 -24 21 -23 22 -37 -24 c-21 -13 -38
-31 -38 -39 0 -25 -25 -17 -64 21 l-36 35 -11 -28 c-6 -15 -12 -39 -14 -53
l-3 -25 15 23 c21 31 49 28 64 -7 11 -25 16 -28 37 -20 13 5 28 7 33 3 5 -3 9
2 9 10 0 9 -4 16 -9 16 -5 0 -7 9 -4 21 l6 20 22 -21 c12 -11 24 -18 27 -14 3
3 9 0 13 -6 4 -7 -2 -14 -14 -17 -12 -3 -21 -10 -21 -15 0 -5 -13 -29 -29 -52
-17 -24 -33 -55 -37 -69 -3 -15 -9 -27 -13 -27 -4 0 -28 13 -54 30 -214 136
-289 414 -170 641 102 196 324 301 540 255z m26 -252 c4 -8 12 -14 18 -14 15
0 78 -67 89 -94 8 -23 6 -24 -33 -29 -24 -2 -54 1 -71 9 -34 16 -36 17 -35 7
4 -22 -2 -33 -13 -27 -10 5 -10 4 -1 -6 10 -11 18 -11 39 -1 21 9 29 9 35 0 6
-11 27 -9 82 7 13 4 17 -1 17 -24 0 -17 -5 -32 -11 -34 -5 -2 -7 -11 -3 -22 5
-12 9 -14 14 -6 6 9 13 9 29 -2 17 -10 21 -21 20 -48 -2 -19 -6 -40 -10 -45
-4 -6 -13 -23 -18 -38 -10 -25 -9 -27 8 -18 10 6 21 8 24 5 7 -7 -10 -65 -23
-78 -5 -5 -10 -15 -10 -20 0 -6 17 7 38 28 39 37 39 37 85 25 26 -6 47 -15 47
-19 0 -12 -23 -27 -52 -34 -16 -3 -28 -11 -28 -17 0 -6 -4 -8 -10 -4 -5 3 -4
-8 2 -27 11 -31 10 -33 -38 -76 -27 -25 -76 -58 -109 -74 -58 -27 -60 -27 -63
-8 -4 24 -19 25 -46 5 -29 -22 -43 -18 -18 5 12 11 26 20 32 20 5 0 10 7 10
15 0 8 -5 15 -11 15 -5 0 -7 5 -3 11 8 14 6 13 -64 -24 -30 -16 -56 -26 -59
-23 -8 8 -33 117 -33 144 0 15 7 26 20 29 11 3 17 10 14 15 -3 5 -12 7 -19 4
-26 -10 -23 7 6 36 16 17 27 33 25 36 -3 3 -1 11 5 18 8 10 4 27 -14 66 -13
29 -27 60 -30 68 -3 8 -6 1 -6 -15 -1 -30 -16 -55 -33 -55 -4 0 -3 12 3 27 5
14 9 33 8 42 -1 9 -1 27 0 40 1 20 3 21 16 11 12 -10 15 -10 15 4 0 9 6 16 14
16 8 0 16 7 20 15 3 8 12 15 21 15 8 0 15 5 15 11 0 5 -4 7 -10 4 -5 -3 -7 0
-4 8 3 9 -3 16 -15 20 -19 5 -19 7 -5 52 7 26 22 54 31 61 21 16 84 8 96 -12z"
          />
          <path
            d="M2260 1384 c0 -12 6 -15 25 -10 32 8 47 -20 22 -39 -18 -13 -23 -35
-8 -35 6 0 13 5 17 12 9 14 34 -18 34 -43 0 -50 -69 -48 -100 4 -11 17 -20 26
-20 19 0 -26 40 -70 70 -77 16 -3 39 -1 50 5 21 11 23 27 9 80 -2 8 3 15 11
15 10 0 16 -12 18 -32 3 -27 7 -33 27 -33 35 0 59 40 51 85 -10 53 -36 61 -81
25 -45 -36 -55 -37 -55 -7 0 13 -5 28 -12 35 -18 18 -58 15 -58 -4z"
          />
        </g>
      </svg>
    );
  }
}

export default FeelingProud;
