# Gender identification with JavaScript
This program permits to identify 3 names : bob, alicia, cookie. The program identifies the gender, bob as a boy, alicia as a girl and cookie as a dog. And the other names or words are unknown by the program.
Here the input.txt file contains information to run the program like an example.

## Getting started
### Installing 

Clone this Github repository:
```
git clone https://github.com/shirleytruffierblanc/gender-identification-JavaScript.git
cd gender-identification-JavaScript
```
### Make the script executable

To make the script executable :
```
chmod +x gender-identification-JavaScript.js
```
### Running the program and display the result

To run and diplay the result of gender-identification.sh use `rhino <data file>`:

```
cat input.txt | ./gender-identification-JavaScript.js > result.txt
cat result.txt
```
The result is : 
```
unknown
unknown
boy
girl
unknown
dog
unknown
```

