//https://www.shadertoy.com/view/wtS3Rc
float p2x2(vec2 p){
	/*p=floor(mod(p,2.));
	//return p.x+(p.y*2.);
	return abs(p.x*2.-p.y*3.);*/
	return mat2(
		0,3,
		2,1
	)[int(p.x)%2][int(p.y)%2];
}
#define ITER 3
float orderedDither(vec2 p){
	float o=0.;
	for(int i=0;i<ITER;i++){o+=p2x2(p/pow(2.,float(ITER-i)-1.))*pow(4.,float(i));}
	return o;
}
vec3 image(vec2 p){
	return texture(bitmap,fract(p+vec2((iTime/16.),0.))).rgb;
}
void mainImage(out vec4 fragColor,in vec2 fragCoord){
	float pixelSize=2.;
	vec2 p=floor(gl_FragCoord.xy/pixelSize);
	vec2 uv=p/(iResolution.xy/pixelSize);
	float f=orderedDither(p)/pow(4.,float(ITER));
	fragColor=vec4(floor((image(uv)*2.)+f)/2.,1.);
}