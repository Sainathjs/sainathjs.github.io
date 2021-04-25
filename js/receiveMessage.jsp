<%@ page import = "java.io.*" %>

<%
    try
    {
        File file = new File( "message.txt" );

        PrintWriter writer = new PrintWriter( new FileOutputStream( file, true ), true );
        writer.println( "******************************************************************************" );
        writer.println( "Name: " + request.getParameter( "name" ) );
        writer.println( "Email: " + request.getParameter( "email" ) );
        writer.println( "Phone: " + request.getParameter( "phone" ) );
        writer.println( "Message: " + request.getParameter( "message" ) );
        writer.println( "******************************************************************************" );
        writer.flush();
        System.out.println( file.getAbsolutePath() );
        writer.close();
        
        System.out.println( "Name: " + request.getParameter( "name" ) );
        System.out.println( "Email: " + request.getParameter( "email" ) );
        System.out.println( "Phone: " + request.getParameter( "phone" ) );
        System.out.println( request.getParameter( "message" ) );

        out.println( "Message has been sent successfully!!!" );
    } catch( Exception e )
    {
        System.out.println( e.getMessage() + " : " + e );
        out.println( "An error accured while sending message!!!" );
    }
%>
