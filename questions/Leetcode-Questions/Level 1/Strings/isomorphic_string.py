# Given 2 strings determine if they are isomorphic 
# All occurances off a character must be replaced with another character, WHILE 
# Preserving the order or characters 
# No two characters may map to the same character, BUT a character may map to itself 
'''
Input: s = "egg", t = "add"
Output: true

So basically e will map to a 
and g will map to d 


Input: s = "foo", t = "bar"
Output: false

f --> b 
o --> a 
these are no isomorphic because o cannot be mapped to r since we already used it

'''

# Another thing is that we need to also map in the opposite direction
# NOTE - so basically we have two mappings
'''
bar and foo 
b --> f
a --> o 
r cannot 
'''

# So using a HashMap is most efficient 
# Pseudocode 



class Solution:
    def isIsomorphic(self, s: str, t: str) -> bool:

        # 1) we need to create 2 empty maps 
        mapStoT, mapTtoS = {}, {}

        # 2) now go through the string 
        for i  in range(len(s)):
            # 3) Set the characters to equal to the index in the string s and t
            character1, character2 = s[i], t[i]
            
            #5 Now we want to detect if a character already has a different mapping and return false 
            # basically we are about to insert c2, but if it already has a different mapping "!=", that means to return false 
            # Now for the OR condition, we want to do it the other way for mapTtoS
            if((c1 in mapStoT and mapStoT[c1] != c2)or (c2 in mapTtoS and mapTtoS[c2] != c1))
                return False



            #4) we want to map character 1 index to character 2
            mapStoT[c1] = c2
            # vice versa
            mapTtoS[c2] = c1

        # 6 if we exit the loop, we return true that they are isomorphic
        return True