package sk.rzapach.meteo;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableScheduling;

import java.io.BufferedReader;
import java.io.InputStreamReader;

@SpringBootApplication
@EnableScheduling
public class MeteoApplication
{
	public static void main(String[] args)
	{
		SpringApplication.run(MeteoApplication.class, args);
	}

	public static String executeCommand(String command)
	{
		StringBuffer output = new StringBuffer();

		Process p;
		try
		{
			p = Runtime.getRuntime().exec(command);
			p.waitFor();
			BufferedReader reader = new BufferedReader(new InputStreamReader(p.getInputStream()));

			String line;
			while ((line = reader.readLine()) != null)
			{
				output.append(line + "\n");
			}

		} catch (Exception e)
		{
			e.printStackTrace();
		}

		return output.toString();

	}
}
