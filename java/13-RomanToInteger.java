// Loop through each character in the string containing the roman numerals.

// Compare the value of the current roman symbol with the value of the roman symbol to its right.

// If the current value is greater than or equal to the value of the symbol to the right, add the current symbol’s value to the total.
// If the current value is smaller than the value of the symbol to the right, subtract the current symbol’s value from the total.

class RomanToInteger {
  public static void main(String[] args) {
    System.out.println("Hello World!");
    String s = "MCMXCIV";
    
    char[] symbols = {'I', 'V', 'X', 'L', 'C', 'D', 'M'};
    int[] numbers = {1, 5, 10, 50, 100, 500, 1000};
    
    //loop through each character
    for(int i=0; i < symbols.length; i++) {
    	System.out.println(symbols[i]);
        //compare current roman symbol with the next right
        //if(symbols[i]
    }
  }
}
