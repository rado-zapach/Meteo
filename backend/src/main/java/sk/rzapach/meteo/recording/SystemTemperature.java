package sk.rzapach.meteo.recording;

import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Component;
import oshi.SystemInfo;
import oshi.hardware.HardwareAbstractionLayer;
import oshi.hardware.Sensors;

@Component
public class SystemTemperature extends BaseRecording implements Measurable
{
	@Scheduled(fixedRate = 10*1000)
	public void measure()
	{
		SystemInfo si = new SystemInfo();
		HardwareAbstractionLayer hal = si.getHardware();
		Sensors sensors = hal.getSensors();

		record(sensors.getCpuTemperature(), "Temperature");
	}
}
