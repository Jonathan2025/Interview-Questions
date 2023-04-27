
        # My initial solution would be set up two running somes starting from the left side and right side. if at any point the sums are the same then the number that is left over will be the pivot index. 

        # we could also do it the more efficient way 
        # we know the sum of all numbers is 28 
        # the left sum will equal to the left side 
        # the right sum will equal to the total - left side AND - the PIVOT index we are currently at
        # so if we had nums = [1,7,3,6,5,6]
        # then for example if we were at the index number 6, the right sum = 28 - 11 - 6 
        # now since the number is 6 we want to return its INDEX which is 3

class Solution:
    def pivotIndex(self, nums: List[int]) -> int:

      # first we want the total sum of the numbers in the array 
      total = sum(nums)

      # initiate the left sum 
      leftSum = 0 
      for i in range(len(nums)):
        # Now as we go through the loop we need to calculate the right sum
        # remember from our pseudocode we have right sum will equal to the total - left side AND - the PIVOT index we are currently at
        rightSum = total - leftSum - nums[i]
        # if the leftsum = to rightsum then return the pivot INDEX
        if leftSum == rightSum:

          return i

        # now we neeed to update the left sum each sum 
        leftSum += nums[i]
      return -1