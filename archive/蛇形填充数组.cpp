#include<stdio.h>
int main()
{
	int n,i=0,j=0,sum=2;
	int arr[11][11];
	scanf("%d",&n);
	arr[i][j]=1;//填第一个
	while(sum<=n*n)
	{
		while(i-1>=0 && j+1<n ){//向上填数
			arr[--i][++j]=sum++;
			
		}
		if(j+1<n)arr[i][++j]=sum++;//改变方向
		else arr[++i][j]=sum++;
		while(i+1<n && j-1>=0 ){//向下填数
			arr[++i][--j]=sum++;
		}
		if(i+1<n)arr[++i][j]=sum++;//改变方向
		else arr[i][++j]=sum++;
	}

	for(i=0;i<n;++i)//输出
	{
		for(j=0;j<n;j++)
			printf("%d ",arr[i][j]);
		printf("\n");
	}
	return 0;
}