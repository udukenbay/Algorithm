class Solution {
    public boolean isPalindrome(String s) {
        String text = s.replaceAll("[^A-Za-z0-9]", "").replace(" ", "").toLowerCase();
        int middle = Math.round(text.length()/2);
        int front = 0;
        int back = text.length() - 1;
        
        while (front < middle) {
            if (text.charAt(front) != text.charAt(back))
                return false;
            
            front++;
            back--;
        }

        return true;
    }
}