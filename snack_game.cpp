#include <stdio.h>  // for standard input and output.
#include <conio.h>  
#include <stdlib.h>
#include <unistd.h>

int i,j;
int h=25,w=30,x,y; //height-->h width-->w    x and y positon of snake.
int score,fruitx,fruity; 
int gameover,move;
int tailx[50],taily[50],count;

void controls();  //to create controls of game.
void frame();   //to create outer frame of the game. 
void elements();  //to initiate the game.
void working();   //for movement of sanke.

int main()
{
	elements();
	while(gameover==0)		//all functions will work until gameover 
	{
	frame();	//these three function work and snake make one movement
	controls();
	working();
	}
	return 0;
}

void frame()
{
	system("cls");
	for(i=0;i<=h;i++)
	{
		for(j=0;j<=w;j++)
		{
			if(i==0 || i==h ) 
			{
				printf("-");
			}
			else if(j==0 || j==w)
			{
				printf("|");
			}
			else
			{
				if(i==x && j==y)
				{
					printf("0");    //snake will generate where i and j is equal to coordinates of snake
				}
				else if(i==fruitx && j==fruity)
				{
					printf("@");    //fruit will generate where i and j is equal to coordinates of fruit
				}
				else
				{
					printf(" ");    //blank space of game
				}
			}
	    }
		printf("\n");
	}
}


void elements()
{
	gameover=0;
	x=w/2;
	y=h/2;
	fruitx=rand()%25+1;
	fruity=rand()%30+1;
	score=0;
}


void controls()
{
	if (kbhit())
	{
		switch(getch())    //getch will get character detected by kbhit.
		{
			case 'a':   //move left
				move=1;
				break;
			case 's':   //move down
				move=2;
				break;
			case 'd':   //move right
				move=3;
				break;
			case 'w':   // move up
				move=4;
				break;
			case 'x':
				gameover=1;
				break;
		}
	}
}



void working()
{
	switch(move)
	{
		case 1:   //a
			y--;
			break;
		case 2:   //s
			x++;
			break;
		case 3:   //d
			y++;
			break;
		case 4:   //w
			x--;
			break;
		default:
			break;
	}
	sleep(1/100);
	if (x<0 || x>h || y<0 || y>w)	//when game will over.
	{
		gameover=1;
	}
	if (x==fruitx && y==fruity)		//to generate new fruit after eating.
	{
		fruitx=rand()%25+1;
		fruity=rand()%30+1;
		score++;
		count++;
	}
}