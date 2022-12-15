class Solution {
  public boolean halvesAreAlike(String s) {
      String a = s.substring(0, s.length()/2);
      String b = s.substring(s.length()/2, s.length());

      System.out.println(a);
      System.out.println(b);

      String[] alike = {"a", "e", "i", "o", "u", "A", "E", "I", "O", "U"};

      String p1 = "";
      for(int i=0; i < a.length(); i++) {
          if(Arrays.asList(alike).contains(a.substring(i, i+1))) {
              p1 += a.substring(i, i+1);
          }
      }

      System.out.println(p1);

      String p2 = "";
      for(int i=0; i < b.length(); i++) {
          if(Arrays.asList(alike).contains(b.substring(i, i+1))) {
              p2 += b.substring(i, i+1);
          }
      }

      System.out.println(p2);

      if(p1.length() == p2.length())
          return true;

      return false;
  }
}
