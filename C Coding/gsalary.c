#include<stdio.h>
#include<conio.h>
int main ()
{
    /*declaring veriables*/
    float bsalary, dallow, hrallow, grsalary;
   
    /*prompt to take bsalary as input*/
    printf("Please enter the basic salery: ");
   
    /*taking input*/
    scanf("%f",&bsalary);
   
    /*calculations*/
    dallow = 0.4* bsalary;
    hrallow = 0.2 * bsalary;
    grsalary = bsalary + dallow + hrallow;
  
    /*showing results*/
    printf("\n\nBasic Salary          :          %f Rs\n",bsalary);
    printf("\nDearness Allownce     :          %f Rs \n",dallow);
    printf("\nHouse Rant Allownce   :          %f Rs \n",hrallow);
    printf("___________________________________________\n");
    printf("\nGross Salary          :          %f Rs\n",grsalary);
    getch();
    return 0;
}
