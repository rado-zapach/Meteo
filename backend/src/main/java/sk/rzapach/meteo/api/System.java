package sk.rzapach.meteo.api;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import oshi.SystemInfo;
import oshi.hardware.*;
import oshi.software.os.OSProcess;
import oshi.software.os.OperatingSystem;

@RestController
@RequestMapping("/system")
public class System
{
	@GetMapping(value = "computerSystem")
	public ComputerSystem getComputerSystem()
	{
		SystemInfo si = new SystemInfo();
		HardwareAbstractionLayer hal = si.getHardware();

		return hal.getComputerSystem();
	}

	@GetMapping(value = "processor")
	public CentralProcessor getProcessor()
	{
		SystemInfo si = new SystemInfo();
		HardwareAbstractionLayer hal = si.getHardware();

		return hal.getProcessor();
	}

	@GetMapping(value = "memory")
	public GlobalMemory getMemory()
	{
		SystemInfo si = new SystemInfo();
		HardwareAbstractionLayer hal = si.getHardware();

		return hal.getMemory();
	}

	@GetMapping(value = "powerSources")
	public PowerSource[] getPowerSources()
	{
		SystemInfo si = new SystemInfo();
		HardwareAbstractionLayer hal = si.getHardware();

		return hal.getPowerSources();
	}

	@GetMapping(value = "diskStores")
	public HWDiskStore[] getDiskStores()
	{
		SystemInfo si = new SystemInfo();
		HardwareAbstractionLayer hal = si.getHardware();

		return hal.getDiskStores();
	}

	@GetMapping(value = "networkIFs")
	public NetworkIF[] getNetworkIFs()
	{
		SystemInfo si = new SystemInfo();
		HardwareAbstractionLayer hal = si.getHardware();

		return hal.getNetworkIFs();
	}

	@GetMapping(value = "displays")
	public Display[] getDisplays()
	{
		SystemInfo si = new SystemInfo();
		HardwareAbstractionLayer hal = si.getHardware();

		return hal.getDisplays();
	}

	@GetMapping(value = "sensors")
	public Sensors getSensors()
	{
		SystemInfo si = new SystemInfo();
		HardwareAbstractionLayer hal = si.getHardware();

		return hal.getSensors();
	}

	@GetMapping(value = "usbDevices")
	public UsbDevice[] getUsbDevices()
	{
		SystemInfo si = new SystemInfo();
		HardwareAbstractionLayer hal = si.getHardware();

		return hal.getUsbDevices(true);
	}

	@GetMapping(value = "OS")
	public OperatingSystem getOS()
	{
		SystemInfo si = new SystemInfo();

		return si.getOperatingSystem();
	}

	@GetMapping(value = "processes")
	public OSProcess[] getProcesses(@RequestParam(defaultValue = "10", required = false) int limit, @RequestParam(defaultValue = "CPU", required = false) OperatingSystem.ProcessSort sort)
	{
		SystemInfo si = new SystemInfo();
		OperatingSystem os = si.getOperatingSystem();

		return os.getProcesses(limit, sort);
	}
}
