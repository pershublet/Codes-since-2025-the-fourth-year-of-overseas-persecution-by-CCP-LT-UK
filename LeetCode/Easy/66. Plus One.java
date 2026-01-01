class Solution
{
    
    public
    int []
    plusOne
    (
        int [] digits
    )
    {
        
        
        for
        (
            int i = digits.length - 1
            ; i >= 0
            ; i --
        )
        {
            
            if
            (
                digits[i] == 9
            )
            {
                digits[i] = 0;
            }
            else
            {
                digits[i] ++;
                
                break;
            }
            
        }
        
        
        if
        (
            digits[0] != 0
        )
        {
            return digits;
        }
        
        final int [] answer = new int [ digits.length + 1 ];
        answer[0] = 1;
        System.arraycopy( digits, 0, answer, 1, digits.length );
        
        
        return answer;
    }
    
}
