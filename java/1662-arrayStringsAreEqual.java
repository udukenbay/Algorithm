class Solution {
  public boolean arrayStringsAreEqual(String[] word1, String[] word2) {
      String str1 = "";
      for(int i=0; i < word1.length; i++) {
          str1 += word1[i];
      }

      System.out.println(str1);

      String str2 = "";
      for(int i=0; i < word2.length; i++) {
          str2 += word2[i];
      }

      System.out.println(str2);

      boolean result = false;
      if(str1.equals(str2)) {
          result = true;
      }

      return result;
  }
}