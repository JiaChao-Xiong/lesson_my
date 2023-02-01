// 删除有序数组的重复项
var removeDuplicates = function(nums) {
    let len = nums.length;
    if(len<1) return len;
    let i = 0,j = 0;
    while(j<len){
        while(nums[i] === nums[j] && j<len) j++;
        if(nums[i] !== nums[j] && j<len) {
            i++;
            nums[i] = nums[j];
        }
        j++;
    }
    return i + 1;
};
console.log(removeDuplicates([1,2,3,3,4,4,5]));
