import java.util.HashMap;

class Solution {
    public int[] Exists(String[] strings, int target) {
        HashMap<String, Integer> map;
        int max;
        for(String str in strings) {
            if(str in map)
                map.put(str, map.get(str)+1)
            else
                map.put(str, 1)
            max = Max(max, map.get(str))
        }
        return max;
    }
}