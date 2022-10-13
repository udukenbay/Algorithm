class Solution {
  public int numberOfSteps(int num) {
      int steps = 0;

        while(num > 0) {
            // Before we used num % 2
            if((num & 1) == 0) { // num: xxxxxxx0 & bitmask: 00000001
                num >>= 1;
            } else num--;

            steps++;
        }

        return steps;
  }
}