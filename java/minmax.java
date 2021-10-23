import java.util.*;
class minmax
{
    public static void main(String args[]) 
    {
        int a[]={123,34,55,1,78,953,5679,54};
        Arrays.sort(a);
        System.out.println("minimum number="+a[0]);   
        
        System.out.println("maximum number="+a[a.length-1]);   
    }
}