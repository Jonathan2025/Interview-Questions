'''
Given two strings s and t, return true if s is a subsequence of t, or false otherwise.
A subsequence of a string is a new string that is formed from the original string by deleting some (can be none) of the characters without disturbing the relative positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while "aec" is not).
'''
class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:

        # My solution
        # would be to use a method that could look at the string s 
        # and then remove any character not in string s from string t 
        # if the new string t has the characters in string s then return true


        newstring =''

        for i in range(len(t)):
            if (t[i] in s):
                newstring += t[i]
        if s == newstring or s in newstring:
            return True
        else: 
            return False
        # Works for 17/18 test cases but not the last one



        # Working solution 
        # We need to create 2 pointers to iterate through both strings
        # first in the while loop, we go through all letters in string t (hence the j+=1)
        # If the current character on string S is EQUAL to the character on string T
        # THEN we will move onto the next character in S 


class Solution:
    def isSubsequence(self, s: str, t: str) -> bool:
        # initialize the pointers 
        i =0 
        j =0 

        # going through the string with a while loop we want to go through all the characters of s and t 
        while i < len(s) and j <len(t):
            # if the current character in s  EQUALS to the current character in t, then add one to the i pointer
            if s[i] == t[j]:
                i += 1
            # If it does equal or not,regradless we move onto the next character in t 
            j += 1

        # if i == len(s):
        #     return True 
        # else:
        #     return False

        # if i counter is == to the length of the s string then return true
        return i==len(s)


