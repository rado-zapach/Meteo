package sk.rzapach.meteo.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import sk.rzapach.meteo.MeteoApplication;

@RestController
@RequestMapping("/servo")
public class ServoControll
{
	@GetMapping(value = "right")
	public void turnRight()
	{
		MeteoApplication.executeCommand("/home/pi/servo/right");
	}

	@GetMapping(value = "left")
	public void turnLeft()
	{
		MeteoApplication.executeCommand("/home/pi/servo/left");
	}

	@GetMapping(value = "up")
	public void turnUp()
	{
		MeteoApplication.executeCommand("/home/pi/servo/up");
	}

	@GetMapping(value = "down")
	public void turnDown()
	{
		MeteoApplication.executeCommand("/home/pi/servo/down");
	}

	@GetMapping(value = "neutral")
	public void neutral()
	{
	}
}
