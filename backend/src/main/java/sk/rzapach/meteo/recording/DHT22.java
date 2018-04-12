package sk.rzapach.meteo.recording;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import sk.rzapach.meteo.MeteoApplication;

import java.io.BufferedReader;
import java.io.InputStreamReader;

@Component
public class DHT22 extends BaseRecording implements Measurable
{
	@Scheduled(fixedRate = 5 * 60 * 1000)
	public void measure()
	{
		String command22 = "/home/pi/temp/Adafruit_Python_DHT/examples/AdafruitDHT.py 22 22";
		String command27 = "/home/pi/temp/Adafruit_Python_DHT/examples/AdafruitDHT.py 22 27";

		recordFromCommand(command22, "DHT22-22", 0);
		recordFromCommand(command27, "DHT22-27", 0);
	}

	private static void recordFromCommand(String command, String type, int counter)
	{
		if(counter>=5)
			return;

		String output = MeteoApplication.executeCommand(command);
//		String output = "Temp=24.7*  Humidity=44.4%";

		String[] array = output.trim().split(" ");

		array[0] = array[0].replace("Temp=", "");
		array[0] = array[0].replace("*", "");
		Double temperature = Double.valueOf(array[0].trim());

		array[2] = array[2].replace("Humidity=", "");
		array[2] = array[2].replace("%", "");
		Double humidity = Double.valueOf(array[2].trim());

		if(humidity>=0 && humidity<=100)
		{
			record(temperature, "t-" + type);
			record(humidity, "h-" + type);
		}
		else
			recordFromCommand(command, type, counter+1);
	}
}
