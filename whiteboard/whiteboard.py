# You will be given an array of numbers. You have to sort the odd numbers 
# in ascending order while leaving the even numbers at their original positions.

# Examples
# [7, 1]  =>  [1, 7]
# [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
# [1, 8, 7, 6, 5, 4, 3, 2, 9, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

nums = [1,1,0,1,1,1,1,1]
nums2 = [1,0,1,1,0,1]
def max_num_con(nums):
    max_con = 0
    con = 0
    for num in nums:
        if num == 1:
            con += 1
        else:
            con = 0
        max_con = max(max_con, con)
    return max_con
print(max_num_con(nums))