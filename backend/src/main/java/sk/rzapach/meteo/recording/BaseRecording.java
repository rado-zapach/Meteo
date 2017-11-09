package sk.rzapach.meteo.recording;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import sk.rzapach.meteo.model.Sensor;
import sk.rzapach.meteo.model.SensorRepository;

import java.util.Date;

@Component
public class BaseRecording
{
	protected static SensorRepository db;

	@Autowired
	public void setDb(SensorRepository db) {
		this.db = db;
	}

	protected static void record(Double value, String type)
	{
		Sensor sensor = new Sensor();

		sensor.setCreated(new Date());
		sensor.setType(type);
		sensor.setValue(value);

		db.save(sensor);
	}
}
