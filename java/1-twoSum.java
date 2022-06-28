import java.util.HashMap;

class Solution {
    public int[] twoSum(int[] nums, int target) {
        HashMap<Integer, Integer> map = new HashMap<>();

        int[] res = new int[2];
        for(int i = 0; i < nums.length; i++) {
            int n = nums[i];
            if(map.containsKey(target - n)) {
                res[0] = i;
                res[1] = map.get(target - n);
                break;
            }
            map.put(n, i);
        }

        return res;
    }
}