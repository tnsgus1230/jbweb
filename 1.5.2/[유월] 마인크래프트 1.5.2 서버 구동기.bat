@echo off
title 마인크래프트 1.5.2 유월 서버구동기
:spawn
cls
echo.
echo.-------------------------------------------------------------
echo.
echo.     ★ [유월] 마인크래프트 1.5.2 서버 구동기 ★
echo. 
echo.      1 . 마인크래프트 1.5.2 서버 구동 [ 자바 32 ] 
echo. 
echo.      2 . 서버 구동기 색깔 변경
echo. 
echo.      3 . 제작자 블로그 가기 [ 유월 블로그 ]
echo. 
echo.      4 . 버킷 종료하기
echo.
echo. 
echo.     ★ 제작자 - 유월 (Youwol) ★
echo.     ★ 버킷을 뜯어서 고치지 말아주세요 ★
echo.
echo.-------------------------------------------------------------


set /p a= ★ 자신의 자바 버전을 선택하시기 바랍니다. Enter :

if %a%==1 goto 326
if %a%==2 goto color
if %a%==3 goto blog
if %a%==4 goto exit

:326
cls
echo.
echo.-------------------------------------------------------------
echo.
echo.     ★ [유월] 마인크래프트 1.5.2 서버 구동기 ★
echo.
echo.     ☆ 서버가 구동중입니다. [ 아무키도 누르지마세요! ] ☆
echo.
echo.      * 주의사항 - 서버 구동중일때 아무거나 누르지마세요!
echo.                  
echo.-------------------------------------------------------------

@echo off
java -Xms128M -Xmx1G -jar craftbukkit.jar
pause

:blog
cls
explorer "http://blog.naver.com/snm306"
goto spawn

:color
cls
echo.
echo.-------------------------------------------------------------
echo.
echo.     ★ [유월] 서버 구동기 색깔 변경 ★
echo.
echo.     1 . 빨간색            2 . 노랑색
echo.
echo.     3 . 하늘색            4 . 흰색
echo. 
echo.               5 . 메인 이동
echo.               
echo.-------------------------------------------------------------

set /p colorsetting= ★ 자신이 원하는 색깔을 선택하세요. Enter :
if /i "%colorsetting%"=="1" color 0c
if /i "%colorsetting%"=="2" color 0e
if /i "%colorsetting%"=="3" color 09
if /i "%colorsetting%"=="4" color 0f
if /i "%colorsetting%"=="5" goto spawn

:error5
goto color

















